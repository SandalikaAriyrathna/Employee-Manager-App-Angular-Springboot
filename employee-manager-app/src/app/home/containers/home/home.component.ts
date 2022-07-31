import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ){}
  // constructor( ){}

  ngOnInit():void {
   
  }

  gotoLogin(){
    this.router.navigate(['/login']);  // define your component where you want to go
}


}
