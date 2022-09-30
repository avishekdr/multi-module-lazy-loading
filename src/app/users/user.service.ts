import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './pages/model/user.model';
import { UsersModule } from './users.module';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private readonly PHX_URL = environment.PHX;

  add(data: User) {
    return this.http.post<{message:string}>(this.PHX_URL, data);
  }

  get() {
    return this.http.get<{message:string}>(this.PHX_URL);
  }
}
