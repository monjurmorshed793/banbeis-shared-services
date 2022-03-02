import { NgModule } from '@angular/core';
import { BanbeisSharedServicesComponent } from './banbeis-shared-services.component';
import {HttpClientModule} from "@angular/common/http";



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
export class BanbeisSharedServicesModule { }
