import { Component, OnInit } from '@angular/core';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'guards';

  constructor(private router: Router, private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.utilsService.showSpinner(true);
      } else if (event instanceof RouteConfigLoadEnd) {
        this.utilsService.showSpinner(false);
      }
    });
  }

  get isSpinnerVisible() {
    return this.utilsService.isSpinnerVisible;
  }
}
