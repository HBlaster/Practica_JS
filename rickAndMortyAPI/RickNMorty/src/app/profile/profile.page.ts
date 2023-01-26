import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: any
  url = 'https://rickandmortyapi.com/api/character'
  character:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(this.url + "/" + this.profileId)
      .subscribe(data => {
        this.character = data;
        console.log(this.character);
      })
  }

}
