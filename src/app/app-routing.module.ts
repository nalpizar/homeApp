import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

import { UserLoginComponent } from './components/sign-up/sign-up.component';
// import { ItemsListComponent } from './items/items-list/items-list.component';
// import { UploadsListComponent } from './uploads/uploads-list/uploads-list.component';

import { CoreModule } from './shared/core.module'

const routes: Routes = [
  // { path: '', component: ReadmePageComponent },
  { path: '/', component: UserLoginComponent, canActivate: [AuthGuard]},
  { path: 'login', component: UserLoginComponent, },
  // { path: '', component: UserLoginComponent, },
  // { path: 'uploads', component: UploadsListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
