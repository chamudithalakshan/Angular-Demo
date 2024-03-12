import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MainComponent} from "./main/main.component";
import {AllComponent} from "./all/all.component";
import {FindComponent} from "./find/find.component";
import {NewComponent} from "./new/new.component";
import {UpdateComponent} from "./update/update.component";
import {DeleteComponent} from "./delete/delete.component";
import {NgModule} from "@angular/core";


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'all', component: AllComponent },
  { path: 'find', component: FindComponent },
  { path: 'new', component: NewComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
