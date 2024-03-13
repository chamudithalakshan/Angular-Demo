 import { HttpInterceptorFn } from '@angular/common/http';
 import {LoadingService} from "../services/loading.service";
 import {inject} from "@angular/core";
 import {catchError, finalize, throwError} from "rxjs";



export const httpManagerInterceptor: HttpInterceptorFn = (req, next) => {
  const service = inject(LoadingService);
 service.loading.next(true);
  return next(req).pipe(
    catchError(err => {
      console.log(err);
      return throwError(err)
    }),
    finalize(()=>{
      service.loading.next(false);
    })
  );
};
