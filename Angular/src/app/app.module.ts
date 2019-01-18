import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material Design
import {MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatToolbarModule, MatTableModule, MatSortModule, MatTreeModule, MatDialogModule, MatPaginatorModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CreateComplaintComponent } from './create-complaint/create-complaint.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AgentComponent } from './agent/agent.component';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CreateComplaintComponent,
    DataTableComponent,
    AgentComponent,
    ListComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatTreeModule,
    MatDialogModule,
    MatPaginatorModule,
    CommonModule,

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
  entryComponents:[CreateComplaintComponent]
})

export class AppModule { }
//