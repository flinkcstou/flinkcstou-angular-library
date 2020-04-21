import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockupHttpInterceptor } from './mockup-http-interceptor';
import { MockupHttpService } from './mockup-http.service';
import { isMock } from './config/default';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    MockupHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockupHttpInterceptor,
      multi: true
    },
  ]
})
export class MockupHttpModule {
  constructor(@Optional() @SkipSelf() parentModule?: MockupHttpModule) {
    if (!!parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  //TODO назар добавить еще два параметра
  // 1 params: должен быть массив c объектом в котором какие ендпойнты используется [{url: '/order', method: 'get', response:{user:{price:452, total:55}}}]
  static forRoot(isMocked: boolean): ModuleWithProviders {
    return {
      ngModule: MockupHttpModule,
      providers: [
        {provide: isMock, useValue: isMocked}
      ]
    };
  }
}
