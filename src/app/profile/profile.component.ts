import { Component, OnInit } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  actualProfile: Profile;

  constructor() {
    const description =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    const profile = new Profile(
      'Julian',
      'Gomez',
      description,
    );
    this.actualProfile = profile;
  }

  ngOnInit(): void {}
}
