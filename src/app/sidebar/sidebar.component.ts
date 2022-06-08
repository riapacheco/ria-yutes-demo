import { Component, OnInit } from '@angular/core';
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
    this.stateService.sidebarState$.subscribe(res => {
      this.sidebarOpen = res;
    })
    
  }
  onMenuClick(){
    if (this.sidebarOpen == false ){
      this.stateService.updateSidebarState(true);
    } else if (this.sidebarOpen == true) {
      this.stateService.updateSidebarState(false);
    }
  }

}