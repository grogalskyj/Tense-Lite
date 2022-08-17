import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  authToken : string;


    constructor(private authenticationService: AuthenticationService, private tokenService : TokenStorageService) {
     }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.url.startsWith('project')){
        return next.handle(req)
      }
      console.log('dog')
      var tok = this.tokenService.getToken()
      if (tok == null){
        return next.handle(req)
      }
      else{
        req = req.clone({
          setHeaders: {
            'Authorization' : 'Bearer ' + tok
          }
        });
        return next.handle(req)
    }
  }
}