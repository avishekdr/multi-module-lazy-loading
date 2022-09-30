import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { AddEditComponent } from "./pages/add-edit/add-edit.component";
import { ViewComponent } from "./pages/view/view.component";

const routes: Routes = [
    { path: 'add', component: AddEditComponent },
    { path: 'view', component: ViewComponent },
    { path: 'menu', component: IndexComponent }
    // {
    //     path: 'order',
    //     component: IndexComponent,
    //     children: [
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }
