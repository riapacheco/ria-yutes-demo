import { Component, OnInit } from '@angular/core';
import { IAccordion } from '../../components/accordion/accordion.interface';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  basicUsageBlock: IAccordion = {
    header: 'Basic Usage',
    showsBody: true,
    body: `
      Add the <code>.btn</code> class followed by the <code>.primary</code> or <code>.secondary</code> class.
    `,
    code: `<button class="btn primary">Submit</button>`  
  };
  roundedUsage: IAccordion = {
    header: 'Rounded',
    showsBody: false,
    body: `
      Add the <code>.rounded</code> class to get...rounded corners.
    `,
    code: `<button class="btn primary rounded">Save Changes</button>`
  };
  hoverUsage: IAccordion = {
    header: 'On Hover',
    showsBody: false,
    body:'more stuff!'
  };
  overrideInstructions: IAccordion = {
    header: 'Override Instructions',
    showsBody: false,
    body: 'Something'
  };
  constructor() { }

  ngOnInit() {
  }

}