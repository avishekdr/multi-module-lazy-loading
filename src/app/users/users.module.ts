import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from "./index/index.component";
import { UsersRoutingModule } from './users-routing.module';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ViewComponent } from './pages/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddEditComponent,ViewComponent,IndexComponent],
  imports: [
    CommonModule,UsersRoutingModule,FormsModule,ReactiveFormsModule, HttpClientModule
  ]
})
export class UsersModule { }
