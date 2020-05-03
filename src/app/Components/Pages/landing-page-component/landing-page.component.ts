import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectName, selectAboutMe } from 'src/app/State-Management/selectors';
import { take, map } from 'rxjs/operators';
import { AboutData } from 'src/app/Models/AboutData';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public aboutMeData: Array<AboutData>

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectAboutMe),
      take(1),
      map(about => this.aboutMeData = about)
    ).subscribe()
  }

}
