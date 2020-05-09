import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { HomeModel } from '../shared/home.model';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  data: HomeModel[];
  constructor(private service: HomeService) {}

  ngOnInit() {
    this.service.getAll().then((data) => (this.data = data));
  }
}
