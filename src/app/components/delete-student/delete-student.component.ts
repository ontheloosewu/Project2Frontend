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

  students: Student[] = [];

  ngOnInit(): void {
    (async () => { 
      this.students = await this.studentService.getAllStudents();
    })();
  }

  async deleteStudent(id: number){
    if(confirm('Are you sure you want to remove this student?\nAll associating grades will also be deleted.')){
      await this.studentService.deleteAllGradesByStudentId(id);
      await this.studentService.deleteStudentById(id);
      alert('Student and associated grades have been deleted');
      this.students = await this.studentService.getAllStudents();
    }
  }
}
