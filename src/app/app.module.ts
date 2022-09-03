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
import { AddStudentComponent } from './components/add-student';
import { DeleteGradeComponent } from './components/delete-grade/delete-grade.component';
import { ViewgradestableComponent } from './components/viewgradestable/viewgradestable.component';
import { ViewgradespageComponent } from './components/viewgradespage/viewgradespage.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DaycareHomeComponent,
    DeleteStudentComponent,
    GraderegistrationpageComponent,
    GraderegistrationformComponent,
    AddStudentComponent,
    DeleteGradeComponent,
    ViewgradestableComponent,
    ViewgradespageComponent,
    SearchStudentComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, StudentUtilService, GradeUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
