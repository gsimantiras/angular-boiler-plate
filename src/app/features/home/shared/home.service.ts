import { Injectable } from '@angular/core';
import { HomeModel } from './home.model';

@Injectable()
export class HomeService {
  constructor() {}

  mockData: HomeModel[] = [
    { id: 1, name: 'data1' },
    { id: 2, name: 'data2' },
  ];

  getAll(): Promise<HomeModel[]> {
    return Promise.resolve(this.mockData);
  }
}
