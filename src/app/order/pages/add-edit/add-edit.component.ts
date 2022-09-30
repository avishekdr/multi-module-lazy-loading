import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderService } from '../../order.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private _http: OrderService) { }

  form = new FormGroup({
    id: new FormControl(0, { nonNullable: true }), item: new FormControl('', { nonNullable: true }),
    qty: new FormControl(0, { nonNullable: true }), amount: new FormControl(0, { nonNullable: true })
  });

  ngOnInit(): void {
    console.log(67)
  }

  save() {
    this._http.add(this.form.value as Order).subscribe(res => {
      this.form.reset();
      console.log(res.message);
    });
  }

}
