import { Component } from '@angular/core';
import { Post } from './post';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autocomplete-bar';

  post: Post[]
  constructor(
    private dataService: DataService
  ) {
    this.post = [];
  }
}
