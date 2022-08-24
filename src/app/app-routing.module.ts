import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponentComponent } from './application-component/application-component.component';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';

const routes: Routes = [
  { path: "", component: ApplicationComponentComponent },
  { path: "contactList", component: ContactListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
