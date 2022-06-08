import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarOpen!: boolean;
  viewTitle = 'Yutes';

  constructor( public stateService: StatesService ) { }

  ngOnInit() {
  }
  updateSidebar(){
    
  }

}