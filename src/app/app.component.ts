import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  handleNav(route: string) {
    if(route === 'about') {
      this.router.navigate(['about-me'])
    } else {
      this.router.navigate(['resume'])
    }
  }
}
