import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AgentComponent } from './agent/agent.component';



const routes: Routes = [{
    path: '', component: HomeComponent
}, {
    path: 'register', component: RegisterComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'name', component: DashboardComponent
    
  }, {
    path: 'agent', component: AgentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
