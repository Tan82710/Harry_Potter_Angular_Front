import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiHPService } from './api-hp.service';
import { Error404Component } from './error404/error404.component';
import { MaterialModule } from './material';
import { CreateWizardComponent } from './create-wizard/create-wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IgxAvatarModule } from 'igniteui-angular';
import { DetailNewWizardComponent } from './detail-new-wizard/detail-new-wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    DetailComponent,
    Error404Component,
    CreateWizardComponent,
    DetailNewWizardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot(),
    IgxAvatarModule

  ],
  providers: [ApiHPService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
