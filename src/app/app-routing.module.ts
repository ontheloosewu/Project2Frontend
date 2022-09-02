import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraderegistrationpageComponent } from './components/graderegistrationpage/graderegistrationpage.component';

const routes: Routes = [
  {path:"graderegistration",component:GraderegistrationpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
