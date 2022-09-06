import { Time } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from 'src/app/models/grade';
import { Student } from 'src/app/models/student';
import { GradeUtilService } from 'src/app/services/grade-util.service';
import { StudentUtilService } from 'src/app/services/student-util.service';

@Component({
  selector: 'app-graderegistrationform',
  templateUrl: './graderegistrationform.component.html',
  styleUrls: ['./graderegistrationform.component.css']
})
export class GraderegistrationformComponent implements OnInit {

  constructor(private gradeService:GradeUtilService,private router:Router ,private studentService:StudentUtilService) { }

  studentId:number = -1;
  timeReported: number = 0;
  note:string = "";
  behavior: string = "";
  savedId:number = 0;
  students:Student[] = [];


  ngOnInit(): void {
    (async () => {
      this.students = await this.studentService.getAllStudents();
    })();

  }

  async register(){
    let currentDate = new Date();
    this.timeReported = currentDate.getTime()/1000;
    console.log(this.timeReported);
    const grade: Grade = {gId:0,sId:this.studentId,timeReported:this.timeReported, note:this.note , behavior:this.behavior};
    const savedGrade:Grade = await this.gradeService.registerGrade(grade);
    this.savedId = savedGrade.gId;

    this.studentId = -1;
    this.note = "";
    this.behavior = "";

  }

}
