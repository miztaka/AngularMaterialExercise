import { Component, OnInit } from '@angular/core';
import { Talk } from '../model/talk';
import { TalksService } from '../talks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private talksService: TalksService
  ) {}

  submissions: Array<Talk>;

  ngOnInit() {
    this.talksService.findTalks().subscribe(
      talks => this.submissions = talks
    );
  }

}
