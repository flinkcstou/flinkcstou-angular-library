import { Inject, Injectable } from '@angular/core';
import { isMock } from './config/default';

@Injectable()
export class MockupHttpService {

  constructor(@Inject(isMock) private mock) {
  }

  get isMock(): boolean {
    return this.mock;
  }
}
