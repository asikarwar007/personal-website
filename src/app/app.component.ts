import { Component, OnInit, HostListener, Inject, AfterViewInit } from "@angular/core";
// import { DataService } from './data.service';
// import { ShareService } from './share.service';
import { Location } from "@angular/common";
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  loading;
  constructor(
    public location: Location,
    private router: Router,
    @Inject(DOCUMENT) document
  ) {
    this.loading = true;
    // updates.available.subscribe(event => {
    //   updates.activateUpdate().then(() => document.location.reload());
    // });
  }
  // @HostListener("window:scroll", ["$event"])
  // onWindowScroll(e) {
  //   if (window.pageYOffset > 100) {
  //     var element = document.getElementById("navbar-top");
  //     if (element) {
  //       element.classList.remove("navbar-transparent");
  //       element.classList.add("bg-success");
  //     }
  //   } else {
  //     var element = document.getElementById("navbar-top");
  //     if (element) {
  //       element.classList.add("navbar-transparent");
  //       element.classList.remove("bg-success");
  //     }
  //   }
  // }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }
  onDeactivate() {
    document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    // window.scrollTo(0, 0)
  }
  ngOnInit() {
    // this.themeService.setLightTheme();
    window.addEventListener('online', this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
    // this.onWindowScroll(event);
  }
  offline: boolean;
  onNetworkStatusChange() {
    this.offline = !navigator.onLine;
    console.log('offline ' + this.offline);
  }

}
