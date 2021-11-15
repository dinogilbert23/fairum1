import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokencontent',
  templateUrl: './tokencontent.component.html',
  styleUrls: ['./tokencontent.component.scss']
})
export class TokencontentComponent implements OnInit {
tokenUtility : any;
  constructor() { }

  ngOnInit(): void {
    this.tokenUtility=[{
      header:'Fundraising Platform',
      icon:'',
      value:'Access exclusive deals by holding tokens. A minimum of 100 tokens is required for the lowest tier.'
    },
    {
      header:'Top Tier Projects',
      icon:'',
      value:'FAIRUM Ventures is reputable for giving access to cutting-edge blockchain projects through early-stage funding rounds.'
    },
    {
      header:'Fair Allocation Model ',
      icon:'',
      value:'Our decentralized fundraising platform is the first to tackle the gas war issue and offer an innovative approach. A pro-rata allocation is offered based on the number of NEBO tokens held.'
    },
    {
      header:'Community Incentive',
      icon:'',
      value:'Our members get reward with tokens by participating in AMAs and supporting other members.'
    }]
  }

}
