import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductService } from './services/product.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { SidenavService } from './services/Sidenav.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
  ProductService,SidenavService,provideHttpClient(withInterceptorsFromDi())]
};
