import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//declare const $: any;
export interface RouteInfo {
    path: Array<string>;
    title: string;
    icon: string;
    class: string;
    exact: boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: ['/project'], title: 'Dashboard',  icon: 'dashboard', class: '', exact: true },
    { path: ['/project', 'board'], title: 'Board',  icon: 'assessment', class: '', exact: true },
    // { path: '/counter', title: 'Counter',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: ['/project','issues'], title: 'Issues',  icon:'playlist_add_check', class: '', exact: true },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: any[];
  projectId: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params =>{
    //   let projectId: any = params['projectId'];

    //   this.menuItems = [
    //     { path: ['/project', projectId], title: 'Dashboard',  icon: 'dashboard', class: '' , exact: true},
    //     { path: ['/project', projectId, 'board'], title: 'Board',  icon: 'assessment', class: '' , exact: true},
    //     { path: ['/project', projectId, 'issues'], title: 'Issues',  icon:'playlist_add_check', class: '' , exact: false}
    //   ]
    // })
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  isMobileMenu() {
    //   if ($(window).width() > 991) {
    //       return false;
    //   }
    //   return true;
    return true;
  };

  toggleCollapse(): void {
    var menu = document.getElementById('collapseUser');
    if(menu.classList.contains('show')){
      menu.classList.remove('show');
    }
    else {
      menu.classList.add('show');
    }
  }
}
