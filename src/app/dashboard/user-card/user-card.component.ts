import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent implements OnInit {

  constructor() { }

  data: User[] = [
    { id: 1, name: 'Dominik Borowski' },
    { id: 2, name: 'Peter Petkowski'}
  ]

  displayedColumns: string[] = ['id', 'name']

  ngOnInit(): void {}

}
