import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blogheader',
  templateUrl: './blogheader.component.html',
  styleUrls: ['./blogheader.component.scss']
})
export class BlogheaderComponent implements OnInit {
  @ViewChild('blogbtn') blogbtn?: ElementRef;
  constructor(private common:CommonService) { }

  ngOnInit(): void { 
    this.common._blogid.subscribe(data=>{
      if(data == 'blog'){
      let inputElement: HTMLElement = this.blogbtn?.nativeElement as HTMLElement;
      inputElement.click();
      }
    })
  }
  //function
  scrollFn(anchor:HTMLElement): void{
    anchor.scrollIntoView();
  }
}
