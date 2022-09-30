import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html'
})
export class AddEditComponent implements OnInit {

  constructor(private _http: UserService) { }

  // form = new FormGroup({
  //   id: new FormControl(0, { nonNullable: true }), item: new FormControl('', { nonNullable: true }),
  //   qty: new FormControl(0, { nonNullable: true }), amount: new FormControl(0, { nonNullable: true })
  // });
  form = new FormGroup({
    id: new FormControl(0, { nonNullable: true }), name: new FormControl('', { nonNullable: true }),
    location: new FormControl('', { nonNullable: true })
  });

  ngOnInit(): void {
    console.log(77)
  }

  save() {
    this._http.add(this.form.value as User).subscribe(res => {
      this.form.reset();
      console.log(res.message);
    });
  }

}
