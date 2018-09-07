import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    SimpleNotificationsComponent, 
    SimpleNotificationsService, 
    SimpleNotificationComponent,
    MaxPipe
} from './simple-notifications';
import { NotificationsComponent } from './notifications.component';



@NgModule({
    providers: [
        SimpleNotificationsService
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        NotificationsComponent,
        SimpleNotificationsComponent,
        SimpleNotificationComponent,
        MaxPipe
    ],
    exports: [
        NotificationsComponent,
        SimpleNotificationsComponent
    ]
  })
  export class NotificationsModule {
    public static forRoot(): ModuleWithProviders {
      return {
        ngModule: NotificationsModule,
      };
    }
  }