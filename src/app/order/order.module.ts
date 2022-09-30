import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ViewComponent } from './pages/view/view.component';
import { IndexComponent } from './index/index.component';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddEditComponent,
    ViewComponent,
    IndexComponent
  ],
  imports: [
    CommonModule, OrderRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class OrderModule { }
