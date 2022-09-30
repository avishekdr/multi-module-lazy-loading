import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  proceed(location: string) {
    sessionStorage.setItem('set_loc', location);
    console.log(2)
    this.router.navigate([`${location}/menu`]);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
