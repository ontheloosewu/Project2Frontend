import { Component, OnInit } from '@angular/core';
import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
import { GradeUtilService } from 'src/app/services/grade-util.service';
import { StudentUtilService } from 'src/app/services/student-util.service';

@Component({
  selector: 'app-viewgradestable',
  templateUrl: './viewgradestable.component.html',
  styleUrls: ['./viewgradestable.component.css']
})
export class ViewgradestableComponent implements OnInit {

  constructor(private gradeService: GradeUtilService, private studentService:StudentUtilService) { }

  id:number = 0;
  grades:Grade[] = [];
  students:Student[] = [];
  public role :string = "";
  ngOnInit(): void {
    this.checkRole();
    (async () => {
      this.students = await this.studentService.getAllStudents();
    })();

  }


  checkRole(): void
  {
    let r = localStorage.getItem("userRole");

    this.role = r?r : "";
  }

  async retrieveGrades(){
    this.grades = await this.gradeService.getAllGradesByStudentId(this.id);
  }

  async deleteGrade(id: number){
    await this.gradeService.deleteGradeById(id);
    alert("Grade deleted");
    this.retrieveGrades();
  }

}

