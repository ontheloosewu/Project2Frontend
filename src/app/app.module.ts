import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { DaycareHomeComponent } from './components/daycare-home';
import { GraderegistrationpageComponent } from './components/graderegistrationpage/graderegistrationpage.component';
import { GraderegistrationformComponent } from './components/graderegistrationform/graderegistrationform.component';


@NgModule({
  declarations: [
    AppComponent,
    DaycareHomeComponent,
    GraderegistrationpageComponent,
    GraderegistrationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
