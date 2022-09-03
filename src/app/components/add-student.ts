import { Component } from "@angular/core";
import { StudentUtilService } from "src/app/services/student-util.service";
import { Student } from "../models/student";


@Component({
    template:`
    <div class="create-student">
        <h4>Create new Student</h4>
        <label for="firstNameInput">First Name</label>
        <input name="firstNameInput" type="text" [(ngModel)] = "firstName" >
        <label for="lastNameInput">Last Name</label>
        <input name="lastNameInput" type="text" [(ngModel)] = "lastName" >
        <label for="guardianInput">Guardian Email Address</label>
        <input name="guardianInput" type="text" [(ngModel)] = "guardianEmail" >
        <button (click)="createStudent()">Submit</button>
    </div>
    `,
    selector: `add-student`
})
export class AddStudentComponent
{
    constructor(private studentService:StudentUtilService){};

    firstName : string = "";
    lastName :string = "";
    guardianEmail: string = "";

    async createStudent()
    {
        let fName = this.firstName;
        let lName = this.lastName;
        let gMail = this.guardianEmail;
        let student: Student = {sId:0, firstName:fName, lastName:lName, guardianUsername:gMail};
         let savedStudent = await this.studentService.registerStudent(student);
         console.log(savedStudent);
    }
}