import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `
      .hide {
        display: none;
      }
    `,
  ],
})
export class AppComponent {
  showSecret = false;
  log = [];
  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    // @ts-ignore
    this.log.push(this.log.length + 1);
  }
}
