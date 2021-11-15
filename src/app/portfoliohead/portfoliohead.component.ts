import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-portfoliohead',
  templateUrl: './portfoliohead.component.html',
  styleUrls: ['./portfoliohead.component.scss']
})
export class PortfolioheadComponent implements OnInit {
  @ViewChild('portfoliobtn') portfoliobtn?: ElementRef;
  constructor(private common:CommonService) { }

  ngOnInit(): void { 
    this.common._portfolioid.subscribe(data=>{
      if(data == 'portfolio'){
      let inputElement: HTMLElement = this.portfoliobtn?.nativeElement as HTMLElement;
      inputElement.click();
      }
     
    })
  }
  //function
  scrollFn(anchor:HTMLElement): void{
    anchor.scrollIntoView();
  }

}
