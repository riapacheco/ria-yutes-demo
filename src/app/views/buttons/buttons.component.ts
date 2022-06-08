import { Component, OnInit } from '@angular/core';
import { IAccordion } from '../../components/accordion/accordion.interface';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  blocks: IAccordion[] = [
    {
      header: 'Basic Usage',
      showsBody: true,
    }
  ];

  // Code
  btnUsage = `
    <button class="btn primary">Submit</button>
  `;
  constructor() { }

  ngOnInit() {
  }

}