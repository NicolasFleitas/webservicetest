import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProveedorProvider} from '../../providers/proveedor/proveedor';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios=[];

  constructor(public navCtrl: NavController,  public proveedor : ProveedorProvider) {

  }

  ionViewDidLoad() {

    this.proveedor.obtenerdatos()
           .subscribe(
    
            (data)=>{this.usuarios = data as any;},
            (error)=>{console.log(error);}         
    
           )
           //console.log(data);
    
    }
    
}
