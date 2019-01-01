import { Component, OnInit } from '@angular/core';
import { DbContextService } from '../services/db-context.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private dbContextService: DbContextService) { }

  ngOnInit() {
    this.dbContextService.getUsers().subscribe(x => { 
      console.log(x);
    });;
  }

}
