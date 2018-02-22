import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Iuser } from '../core/iuser';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Iuser[];
  users$: Observable<Iuser[]>;

  constructor(private api: ApiService) { }

  // ngOnInit() {
  //   this.api.getUsers().subscribe( (data: Iuser[]) => {
  //     // console.log(data);
  //     this.users = data;
  //   });
  // }

  ngOnInit() {
    this.users$ = this.api.getUsers();
    }

}
