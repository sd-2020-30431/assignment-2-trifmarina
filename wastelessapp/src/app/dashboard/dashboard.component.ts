import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails;
  items;
  constructor(private router:Router,
              private service:UserService,
              private serviceItem: ItemService) {

  }

  goToAddItem (){
    this.router.navigate(['/item']);
  }
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res=>{
        this.userDetails = res;
      },
      err=>{
        console.log(err);
      }
    );

    this.serviceItem.getAllItems().subscribe(
      res=>{
        this.items = res;
        console.log(res);
      },
        err=>{
        console.log(err);
        }

    );

    let btn = document.getElementById("coolbutton");
    if (btn) {
      btn.addEventListener("click", (e: Event) => this.goToAddItem());
    }
  }

  onLogout (){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}
