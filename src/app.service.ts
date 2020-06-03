import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getName(request): string {
    return `Hello ${request.query.name}!`;
  }
}
