import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DEFAULT as mockEndpoints } from './config/default';
import { MockupHttpService } from './mockup-http.service';

@Injectable()
export class MockupHttpInterceptor implements HttpInterceptor {

  constructor(private mockupHttpService: MockupHttpService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!!!this.mockupHttpService.isMock) {
      return next.handle(request);
    }
    const currentMockEndpoint = mockEndpoints[request.method] && mockEndpoints[request.method][request.url] || null;
    return currentMockEndpoint ? currentMockEndpoint.handler() : next.handle(request);
  }
}
