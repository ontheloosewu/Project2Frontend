import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentUtilService } from 'src/app/services/student-util.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private studentService: StudentUtilService, private router: Router) { }

  students: Student[] = [];
  filtered: Student[] = [];
  fname: string = "";
  lname: string = "";
  timeout: any = null;

  ngOnInit(): void {
    (async () => {
      this.students = await this.studentService.getAllStudents();
    })();
  }

  // https://stackblitz.com/edit/how-to-trigger-an-event-in-input-text-after-i-stop-typingwritin?file=src%2Fapp%2Fapp.component.ts
  onKeySearch(event : any)
  {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function (){$this.searchByName();}, 1000);
  }

  searchByName(){
    this.filtered = [];
    for(const student of this.students)
    {

      if (!student.firstName.toLowerCase().includes(this.fname.toLowerCase()))
      {
        continue;
      }

      if (!student.lastName.toLowerCase().includes(this.lname.toLowerCase()))
      {
        continue;
      }
      this.filtered.push(student);
    }
    console.log(this.filtered);
  }

  viewGrades()
  {
    // does not show grades for the current student atm. just sends to grades page
    this.router.navigateByUrl('/view-grades-page');
  }

}
