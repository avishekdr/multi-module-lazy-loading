import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  place = '';

  ngOnInit(): void {
  }

  go() { this._authService.proceed(this.place) }

}
