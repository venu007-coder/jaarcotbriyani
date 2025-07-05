import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wtsOrder';

  showNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     const noNavbarRoutes = ['/signup','/auth/401','/auth/404','/auth/500','/payment'];
    //     this.showNavbar = !noNavbarRoutes.includes(this.router.url);
    //   }
    // });
  }
}
