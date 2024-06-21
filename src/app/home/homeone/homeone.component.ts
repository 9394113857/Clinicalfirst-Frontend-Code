import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-homeone',
  templateUrl: './homeone.component.html',
  styleUrls: ['./homeone.component.css']
})
export class HomeoneComponent implements OnInit {
  config: Slick.Config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
     arrows: false,
  }
  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
