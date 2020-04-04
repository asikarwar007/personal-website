import { Component, OnInit } from '@angular/core';
declare var $
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
        var isMobile = false;
        if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          $('html').addClass('touch');
          isMobile = true;
        }
        else {
          $('html').addClass('no-touch');
          isMobile = false;
        }
    },100)
  }

}
