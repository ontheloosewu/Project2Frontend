import { Component, OnInit } from '@angular/core';
import { GradeUtilService } from 'src/app/services/grade-util.service';

@Component({
  selector: 'app-viewgradestable',
  templateUrl: './viewgradestable.component.html',
  styleUrls: ['./viewgradestable.component.css']
})
export class ViewgradestableComponent implements OnInit {

  constructor(private gradeService: GradeUtilService) { }

  ngOnInit(): void {
  }

}
