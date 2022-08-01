import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  

  // constructor(private zone: NgZone, private router: Router ){}
  // constructor( ){}

  login: boolean = false;
  ngOnInit():void {
   
  }
  gotoLogin(){
    this.router.navigate(['/login']);  // define your component where you want to go
  }

  constructor (private zone: NgZone, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.login= true;
        } else {
          this.login= false;
        }
      }
    });
  }

  
 
}