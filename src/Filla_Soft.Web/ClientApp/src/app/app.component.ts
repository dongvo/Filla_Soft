import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppCommonService } from './app-common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  
  title = 'app';

  useSidebarMini: boolean = false;

  constructor(
    private appCommonService: AppCommonService
  ){
    
  }

  ngOnInit(): void {
    this.appCommonService.useSidebarMini.subscribe(res => {
      this.useSidebarMini = Boolean(res);
    });
  }

}
