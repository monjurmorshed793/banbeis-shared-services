import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { BanbeisSharedServicesComponent } from './banbeis-shared-services.component';
import {HttpClientModule} from "@angular/common/http";
import { BanglaNumberTranslatePipe } from './pipes/bangla-number-translate.pipe';

export const APP_URL = new InjectionToken<string>('APP_URL')


@NgModule({
  declarations: [
    BanbeisSharedServicesComponent,
    BanglaNumberTranslatePipe
  ],
  imports: [
    HttpClientModule
  ],
    exports: [
        BanbeisSharedServicesComponent,
        BanglaNumberTranslatePipe
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
