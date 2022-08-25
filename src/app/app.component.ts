import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="clickHandler()">{{ status }}</button>`,
  styles: ['button { background-color: darkturquoise; color: #fff; border: 1px solid #fff; width: 60px; height: 30px; cursor: pointer; border-radius: 5px; }']
})
export class AppComponent {
  title = 'Angular-Toggle-Button';

  status = 'ON';

  clickHandler() {
    this.status = this.status === 'ON' ? 'OFF' : 'ON';
  }
}
