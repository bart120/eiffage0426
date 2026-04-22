import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if (authService.isConnected()) {
    const token = authService.getToken();
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(clonedReq);/*.pipe(map(event => {

      console.log('HTTP event:', event);
      return event;
    }));*/
  }

  return next(req);/*.pipe(map(event => {

    console.log('HTTP event:', event);
    return event;
  }));*/
};
