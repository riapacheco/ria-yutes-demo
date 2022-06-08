import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  language = 'css';

  code = `
    .class { background: yellow; }
  `;
  private sub = new Subscription();
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}