import { Component, OnInit } from '@angular/core';

declare var bootstrap: any; // 👈 Needed for Bootstrap modal

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // Delay modal by 10 seconds
    setTimeout(() => {
      const modalEl = document.getElementById('whatsappModal');
      if (modalEl) {
        const modalInstance = new bootstrap.Modal(modalEl);
        modalInstance.show();
      }
    }, 5000);
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
