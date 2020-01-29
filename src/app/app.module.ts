import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePage } from './pages/home/home.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeAlarmModule } from "./_store/codeAlarm.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProductListComponent,
    ProductFormComponent,
    NavbarComponent
  ],
  entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CodeAlarmModule
    ],
  providers: [
    {
      provide: [RouteReuseStrategy, FormGroup],
      useClass: IonicRouteStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
