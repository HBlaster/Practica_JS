import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  characters = []
  url = 'https://rickandmortyapi.com/api/character'


  constructor(
    private http: HttpClient,

  ) { }

  ngOnInit() {
    this.http.get<any>(this.url)
      .subscribe(res => {
        this.characters = res.results;
        console.log("Personajes:");
        console.log(this.characters);
      });
  }

}
