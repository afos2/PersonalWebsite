import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectName } from 'src/app/State-Management/selectors';
import { take, map } from 'rxjs/operators';
import { Button } from 'protractor';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public name: string
  public selectedIndex: number = 0
  public navOptions = [{route:'about', label: 'About Me'}, {route: 'resume', label: 'Resume'}]
  
  @Output() navTriggered = new EventEmitter<string> ()

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectName),
      take(5),
      map(name => this.name = name)
    ).subscribe()
  }

  navTo(route: string, index: number):  void {
    this.selectedIndex = index
    this.navTriggered.emit(route)
  }
}
