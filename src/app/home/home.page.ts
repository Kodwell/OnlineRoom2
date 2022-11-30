import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { DbserviceService } from '../services/dbservice.service';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{;

  constructor(private router: Router, private menuCtrl: MenuController, private geolocation: Geolocation, private servicioBD: DbserviceService) {}
  //@param $event
  segmentChanged(){
    console.log();
  }
  ngOnInit(){
  }

  ngAfterViewInit(){
    this.geolocationNative();
  }

  geolocationNative(){
  this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      console.log(geoposition);
  })
}  

}