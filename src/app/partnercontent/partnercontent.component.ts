import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnercontent',
  templateUrl: './partnercontent.component.html',
  styleUrls: ['./partnercontent.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class PartnercontentComponent implements OnInit {
  onResize(event: any) {
    this.screenWidth=event.target.innerWidth < 658 ? 'col-sm-12' : 'col';
  }
  portfolio: any;
  public screenWidth!: string;
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 658) {
      this.screenWidth = 'col-sm-12';
    } else {
      this.screenWidth = 'col';
    }
    this.portfolio = [{
      vabble: '../../assets/images/vabble.png',
      eight: '../../assets/images/eight.png',
      defi: '../../assets/images/opendefi.png',
      centaur: '../../assets/images/centaur.png',
      daofi: '../../assets/images/daofi.jfif'
    },]
  }
}
