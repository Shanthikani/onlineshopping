import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductService } from './services/product.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SidenavService } from './services/Sidenav.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserServiceService } from './services/user.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
  ProductService,UserServiceService,SidenavService,AuthService,CategoryService,CategoryService,provideHttpClient(withInterceptorsFromDi()),
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]
};
