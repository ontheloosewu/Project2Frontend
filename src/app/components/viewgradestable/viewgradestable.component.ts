import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/models/grade';
import { GradeUtilService } from 'src/app/services/grade-util.service';

@Component({
  selector: 'app-viewgradestable',
  templateUrl: './viewgradestable.component.html',
  styleUrls: ['./viewgradestable.component.css']
})
export class ViewgradestableComponent implements OnInit {

  constructor(private gradeService: GradeUtilService) { }

  id:number = 0;
  grades:Grade[] = [];
  ngOnInit(): void {
  }

  async retrieveGrades(){
    this.grades = await this.gradeService.getAllGradesByStudentId(this.id);
  }
}
