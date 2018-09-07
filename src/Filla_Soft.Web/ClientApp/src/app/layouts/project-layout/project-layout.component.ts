import { Component } from '@angular/core';
import { AppCommonService } from '../../app-common.service';

@Component({
    selector: 'app-project-layout',
    templateUrl: './project-layout.component.html',
    styleUrls: [
        './project-layout.component.scss'
    ]
})

export class ProjectLayoutComponent {
    
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