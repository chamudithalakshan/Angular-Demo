import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {PostService} from "./services/post.service";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httpManagerInterceptor} from "./interceptor/http-manager.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),provideHttpClient(withInterceptors([
    httpManagerInterceptor
  ]))]
};
