import { Component, ElementRef, Renderer2 ,HostListener} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(private el: ElementRef, private renderer: Renderer2,public Router:Router) {}

  addShadow = false;
  isActive = false;
  isActiveService = false;
  showDropdownPRDT = false;
  showDropdownBlog = false;

 



  @HostListener('window:scroll', [])
  onScroll() {
    this.addShadow = window.scrollY > 0;
  }



  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
