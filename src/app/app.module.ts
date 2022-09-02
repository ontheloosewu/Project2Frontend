import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { DaycareHomeComponent } from './components/daycare-home';
import { StudentUtilService } from './services/student-util.service';
import { GradeUtilService } from './services/grade-util.service';
import { AddStudentComponent } from './components/add-student';



@NgModule({
  declarations: [
    AppComponent,
    DaycareHomeComponent,
    AddStudentComponent
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
