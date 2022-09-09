import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-view-navbar',
  templateUrl: './view-navbar.component.html',
  styleUrls: ['./view-navbar.component.scss']
})
export class ViewNavbarComponent implements OnInit {

  title!: string;

  constructor(
    router: Router
  ) {
    // get first route and set title
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // first char to uppercase and replace '-' with ' '
        this.title = event.url.split('/')[1].charAt(0).toUpperCase() + event.url.split('/')[1].slice(1).replace(/-/g, ' ');
      }
    })
  }

  ngOnInit(): void {
  }

}
