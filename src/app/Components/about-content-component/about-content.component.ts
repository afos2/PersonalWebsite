import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectName, selectAboutMe } from 'src/app/State-Management/selectors';
import { take, map } from 'rxjs/operators';
import { AboutData } from 'src/app/Models/AboutData';

@Component({
  selector: 'about-content-component',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent implements OnInit {

  @Input() aboutMeData: AboutData

  constructor() { }

  ngOnInit(): void {
  }

}
