import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { GradeUtilService } from 'src/app/services/grade-util.service';
import { StudentUtilService } from 'src/app/services/student-util.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  constructor(private studentService: StudentUtilService) { }

  id: number = 0;

  ngOnInit(): void {
  }

  async getStudentById(){
    const student: Student = await this.studentService.getStudentById(this.id);
    console.log(student);
  }

  async deleteStudent(){
    await this.studentService.deleteAllGradesByStudentId(this.id);
    await this.studentService.deleteStudentById(this.id);
  }
}
