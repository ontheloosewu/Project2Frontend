import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentUtilService } from 'src/app/services/student-util.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private studentService: StudentUtilService) { }

  students: Student[] = [];
  filtered: Student[] = [];
  fname: String = "";
  lname: String = "";

  ngOnInit(): void {
    (async () => {
      this.students = await this.studentService.getAllStudents();
    })();
  }

  searchByName(){
    this.filtered = [];
    for(const student of this.students){
      if(this.fname === student.firstName && this.lname === student.lastName){
        this.filtered.push(student);
      }
    }
    console.log(this.filtered);
  }
}
