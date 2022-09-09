import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { 
    router.events.subscribe((val) =>
    {
      this.checkRole();
    });
  }
 
  public role :string = "";

  checkRole(): void
  {
    let r = localStorage.getItem("userRole");

    this.role = r?r : "";
  }

  ngOnInit(): void {

    
  }

}
