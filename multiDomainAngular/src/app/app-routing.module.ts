import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserBusinessHomeComponent } from './user-business-home/user-business-home.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'user/:userId', component: UserBusinessHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor(){
      
    }
}
