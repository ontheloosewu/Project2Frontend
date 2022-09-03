import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student';
import { DaycareHomeComponent } from './components/daycare-home';
import { DeleteGradeComponent } from './components/delete-grade/delete-grade.component';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import { GraderegistrationformComponent } from './components/graderegistrationform/graderegistrationform.component';
import { GraderegistrationpageComponent } from './components/graderegistrationpage/graderegistrationpage.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { ViewgradespageComponent } from './components/viewgradespage/viewgradespage.component';
import { ViewgradestableComponent } from './components/viewgradestable/viewgradestable.component';

const routes: Routes = [
  {path:"",component:DaycareHomeComponent},
  {path:"home",component:DaycareHomeComponent},
  {path:"grade-registration-page",component:GraderegistrationpageComponent},
  {path:"delete-grade",component:DeleteGradeComponent},
  {path:"delete-student",component:DeleteStudentComponent},
  {path:"search-student",component:SearchStudentComponent},
  {path:"view-grades-page",component:ViewgradespageComponent},
  {path:"add-student", component:AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
