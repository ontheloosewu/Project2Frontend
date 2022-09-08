import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';

import { DaycareHomeComponent } from './components/daycare-home';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { GraderegistrationpageComponent } from './components/graderegistrationpage/graderegistrationpage.component';
import { LoginComponent } from './components/login/login.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { ViewgradespageComponent } from './components/viewgradespage/viewgradespage.component';

const routes: Routes = [
  {path:"",component:DaycareHomeComponent},
  {path:"home",component:DaycareHomeComponent},
  {path:"grade-registration-page",component:GraderegistrationpageComponent},
  {path:"delete-student",component:DeleteStudentComponent},
  {path:"search-student",component:SearchStudentComponent},
  {path:"view-grades-page",component:ViewgradespageComponent},
  {path:"add-student", component:AddStudentComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
