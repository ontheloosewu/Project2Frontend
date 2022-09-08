import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentUtilService } from 'src/app/services/student-util.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentUtilService){};

    firstName : string = "";
    lastName :string = "";
    guardianEmail: string = "";

  ngOnInit(): void {
  }

  async createStudent()
    {
        let fName = this.firstName;
        let lName = this.lastName;
        let gMail = this.guardianEmail;
        let student: Student = {sId:0, firstName:fName, lastName:lName, guardianUsername:gMail};
         let savedStudent = await this.studentService.registerStudent(student);
      alert(`${savedStudent.firstName} ${savedStudent.lastName} has been created.`);
    }

}
