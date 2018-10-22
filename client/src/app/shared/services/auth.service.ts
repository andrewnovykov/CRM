import { Injectable } from '@angular/core';
import { User } from '../interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) {

  }

  private token = null;

  register() {

  }


  login (user: User): Observable<{token: string}> {
    return this.http.post<{ token: string }>('/api/auth/login/', user)
    .pipe(
      tap(
        next => ({token}) => {
          localStorage.setItem( 'auth-token', token);

          this.setToken(token);
         }
      )
    );
  }

    setToken(token: string) {
        this.token = token;
    }

    getToken(): string {
      return this.token;
    }

    isAuthenticated(): boolean {
      return !!this.token;
    }

    logout() {
      this.setToken(null);
      localStorage.clear();
    }



}
