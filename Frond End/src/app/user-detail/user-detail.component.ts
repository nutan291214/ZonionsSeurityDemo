import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_helpers/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  users:User[];
  role:any[];
  constructor(private router:Router,private userService:AuthService) { }

  ngOnInit(): void {
    this.reloadUser();
  }

  reloadUser(){

       this.userService.getAllUsers().subscribe(data=>{
          console.log(data);
          this.users=data;
          for(let i=0;i<this.users.length;i++){
            this.role=this.users.roles.la
          }
       },error=>console.log(error))

  }

}
