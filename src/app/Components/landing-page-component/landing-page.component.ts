import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectName } from 'src/app/State-Management/selectors';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private name: string

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectName),
      take(1),
      map(name => this.name = name)
    ).subscribe()
  }

}
