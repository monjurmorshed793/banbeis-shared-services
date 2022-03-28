import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { BanbeisSharedServicesComponent } from './banbeis-shared-services.component';
import {HttpClientModule} from "@angular/common/http";
import { BanglaNumberTranslatePipe } from './pipes/bangla-number-translate.pipe';
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import {InMemoryCache} from "@apollo/client/core";
import {HttpLink} from 'apollo-angular/http';

export const APP_URL = new InjectionToken<string>('APP_URL')


@NgModule({
  declarations: [
    BanbeisSharedServicesComponent,
    BanglaNumberTranslatePipe
  ],
  imports: [
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink)=>{
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:8081/graphql'
          })
        }
      },
      deps: [HttpLink]
    },
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
