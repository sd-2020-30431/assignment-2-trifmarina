import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails;
  constructor(private router:Router,
              private service:UserService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails = res;
      },
      err=>{
        console.log(err);
      }
    );
  }

  onLogout (){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
