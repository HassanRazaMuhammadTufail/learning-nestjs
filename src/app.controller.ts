import { Controller, Get, Req, Post, HttpCode, Redirect,Param } from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from 'express';

@Controller({host: 'localhost'})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('name')
  @Redirect('https://nestjs.com', 302)
  getHassan(@Req() request: Request): string {
    return this.appService.getName(request);
  }
  @Post()
  @HttpCode(200)
  create(@Req() request: Request) :object {
    console.log(request)
    return {data:request.route}
  }
  @Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
}
