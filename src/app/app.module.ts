import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { DaycareHomeComponent } from './components/daycare-home';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { GraderegistrationpageComponent } from './components/graderegistrationpage/graderegistrationpage.component';
import { GraderegistrationformComponent } from './components/graderegistrationform/graderegistrationform.component';
import { StudentUtilService } from './services/student-util.service';
import { GradeUtilService } from './services/grade-util.service';
import { DeleteGradeComponent } from './components/delete-grade/delete-grade.component';
import { ViewgradestableComponent } from './components/viewgradestable/viewgradestable.component';
import { ViewgradespageComponent } from './components/viewgradespage/viewgradespage.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginUtilService } from './services/login-util.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    DaycareHomeComponent,
    DeleteStudentComponent,
    GraderegistrationpageComponent,
    GraderegistrationformComponent,
    DeleteGradeComponent,
    ViewgradestableComponent,
    ViewgradespageComponent,
    SearchStudentComponent,
    NavbarComponent,
    LoginComponent,
    AddStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule

  ],
  providers: [HttpClient, StudentUtilService, GradeUtilService, LoginUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
