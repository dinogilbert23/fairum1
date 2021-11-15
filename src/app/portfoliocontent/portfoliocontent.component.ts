import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoliocontent',
  templateUrl: './portfoliocontent.component.html',
  styleUrls: ['./portfoliocontent.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

export class PortfoliocontentComponent implements OnInit {
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
    },
    {
      vabble: '../../assets/images/vabble.png',
      eight: '../../assets/images/eight.png',
      defi: '../../assets/images/opendefi.png',
      centaur: '../../assets/images/centaur.png',
      daofi: '../../assets/images/daofi.jfif'
    },
    {
      vabble: '../../assets/images/vabble.png',
      eight: '../../assets/images/eight.png',
      defi: '../../assets/images/opendefi.png',
      centaur: '../../assets/images/centaur.png',
      daofi: '../../assets/images/daofi.jfif'
    },]
  }

}
