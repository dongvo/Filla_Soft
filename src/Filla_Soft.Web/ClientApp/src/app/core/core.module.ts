import { NgModule, Optional, SkipSelf, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslatePipe } from './translate.pipe';
import { NotificationsModule } from './notifications';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { 
    AccountService, 
    DataService, 
    RoleService, 
    LoginControlService,
    CanActivateTeam
} from './services';


//import { WINDOW_PROVIDERS } from './services/window.service';

// App level components
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
// import { ModalComponent } from './components/modal/modal.component';
// import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
// // App level services
// import { AccountService } from './services/account.service';
// import { SimpleNotificationsModule } from './simple-notifications/simple-notifications.module';
// import { DataService } from './services/data.service';
// import { GlobalErrorHandler } from './services/global-error.service';
// import { TimingInterceptor } from './services/interceptors/timing-interceptor';
// import { AuthInterceptor } from './services/interceptors/auth-interceptor';
// import { TranslatePipe } from '../translate.pipe';

@NgModule({
    declarations: [
        // CookieConsentComponent,
        // ModalComponent,
        TranslatePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        NotificationsModule.forRoot(),
        MDBBootstrapModule.forRoot()
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        // Components
        // CookieConsentComponent,
        // ModalComponent,
        TranslatePipe,
        NotificationsModule
    ],
    providers: []
})
export class CoreModule {
    // forRoot allows to override providers
    // https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-for-root
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                AccountService,
                DataService,
                RoleService,
                LoginControlService,
                CanActivateTeam
                // WINDOW_PROVIDERS
                // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                // { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
                // { provide: ErrorHandler, useClass: GlobalErrorHandler }
            ]
        };
    }
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
