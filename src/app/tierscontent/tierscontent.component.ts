import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tierscontent',
  templateUrl: './tierscontent.component.html',
  styleUrls: ['./tierscontent.component.scss']
})
export class TierscontentComponent implements OnInit {
 tierscontent:any;
  constructor() { }

  ngOnInit(): void {
    this.tierscontent = [{
      title:'TRAINEE',
      content:'100 NEBO tokens required',
      footcontent:'Remaining part of the allocation',
    },
    {
      title:'OFFICER',
      content:'1000 NEBO tokens required',
      footcontent:'10% of deals allocation  reserved equally among members ',
    },
    {
      title:'PILOT',
      content:'2500 NEBO tokens required',
      footcontent:'15% of deals allocation  reserved equally among members',
    },
    {
      title:'AUSTRONUT',
      content:'5000 NEBO tokens required',
      footcontent:'25% of deals allocation  reserved equally among members ',
    },]
  }

}
