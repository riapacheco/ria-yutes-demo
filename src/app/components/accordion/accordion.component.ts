import { Component, OnInit, Input } from '@angular/core';
import { IAccordion } from './accordion.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() blocks: IAccordion[] = [
    {
      header: 'Default Title',
      showsBody: false,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}