import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //HOME.PAGE.TS
  constructor(private database:Database) {
  }
  ngOnInit() {
    const route = ref(this.database,"Luz");
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      
    });
  }

 state:boolean=false;
 change(){
  this.state=!this.state;

 }
 state2:boolean=false;
 change2(){
  this.state2=!this.state2;
 }
 state3:boolean=false;
 change3(){
  this.state3=!this.state3;
 }
 state4:boolean=false;
 change4(){
  this.state4=!this.state4;
 }
 state5:boolean=false;
 change5(){
  this.state5=!this.state5;
 }
}
