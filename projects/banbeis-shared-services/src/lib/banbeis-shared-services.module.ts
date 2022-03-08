import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { BanbeisSharedServicesComponent } from './banbeis-shared-services.component';
import {HttpClientModule} from "@angular/common/http";

export const APP_URL = new InjectionToken<string>('APP_URL')


@NgModule({
  declarations: [
    BanbeisSharedServicesComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    BanbeisSharedServicesComponent
  ]
})
export class BanbeisSharedServicesModule {
  static forRoot(host: string): ModuleWithProviders<BanbeisSharedServicesModule>{
    console.log('passed host value', host);
    return {
      ngModule: BanbeisSharedServicesModule,
      providers: [{
        provide: APP_URL,
        useValue: host,
        multi: true
      }]
    }
  }
}
