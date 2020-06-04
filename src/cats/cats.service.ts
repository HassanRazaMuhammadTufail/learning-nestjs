import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
  findOne(id): Cat {
    return this.cats[id];
  }
}


@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}