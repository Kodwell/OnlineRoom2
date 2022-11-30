import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DbserviceService } from './services/dbservice.service';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';

@NgModule({
  declarations: [AppComponent, MenuprincipalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation, SQLite,DbserviceService],
  exports:[MenuprincipalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
