import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqcontent',
  templateUrl: './faqcontent.component.html',
  styleUrls: ['./faqcontent.component.scss']
})
export class FaqcontentComponent implements OnInit {
  faqcontent: any;
  // isToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.faqcontent = [{
      heading: 'How to join FAIRUM Ventures?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'What is the purpose of NEBO community token?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'Where can I buy NEBO token?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'How do I get access to token?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    }, {
      heading: 'How do I get access to deals?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    },
    {
      heading: 'I purchased NEBO tokens, whats Next?',
      content: 'To join FAIRUM Ventures,simply click on "Join FAIRUM Ventures" button, where you will be redirected to our FAIRUM Ventures - Lobby    Telegram channel. Read and follow the pinned message inside the group for further instructions. Its that simple!'
    }]
  }
  Toggle(i: any) {
    this.faqcontent[i].isToggle = !this.faqcontent[i].isToggle;
    
  }
}
