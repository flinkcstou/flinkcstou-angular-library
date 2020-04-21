import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { InjectionToken } from '@angular/core';

export const isMock = new InjectionToken<boolean>('mocked http response');

export const DEFAULT = {
  GET: {
    'https://jsonplaceholder.typicode.com/users': {
      handler: getAllUsers
    }
  }
};

function getAllUsers() {
  return of(new HttpResponse({
    status: 200, body: [
      {
        id: 1,
        name: 'Viktor'
      },
      {
        id: 2,
        name: 'John'
      }
    ]
  }));
}
