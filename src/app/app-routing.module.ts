import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent,
    children: [
      // { path: '', component: LoginComponent, pathMatch: 'full'},
      // { path: 'forgotPassword', component: ForgotPasswordComponent},
      // { path: 'register', component: RegisterComponent}
    ]
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
