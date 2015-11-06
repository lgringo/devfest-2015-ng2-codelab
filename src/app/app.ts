import { Component } from 'angular2/angular2';
import { Toolbar } from './toolbar';

@Component({
  selector: 'devfest',
  template: `<toolbar></toolbar>`,

  directives:  [Toolbar]
})



export class Hello {}
