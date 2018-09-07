import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html'
})
export class NotificationsComponent {

    @Input() simpleNotificationOptions: any = {
        position: ['bottom', 'left'],
        timeOut: 5000,
        lastOnBottom: true
    };

}