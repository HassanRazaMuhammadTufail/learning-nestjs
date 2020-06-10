import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Redirect,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request as request } from 'express';
import { User } from './customDecorators/user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

/**
 * supplied host property to controller decorator
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('redirect')
  @Redirect('https://hassanrazamohdtufail.web.app/', 302)
  getHassan(@Req() request: request): string {
    return this.appService.getName(request);
  }
  @Post()
  @HttpCode(200)
  create(@Req() request: request): object {
    console.log(request);
    return { data: request.route };
  }
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  //   @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }
  @Get('custom')
  async findOne(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }
}
