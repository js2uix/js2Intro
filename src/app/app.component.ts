import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sysTitleStr = '';
  sysTitleDate = [];
  sysTiemr: any;

  constructor() {
    const sysTitle = 'Welcome to the Js2uix Playground!';
    this.sysTitleDate = sysTitle.split('');
    this.onStartTitleRender();
  }

  private onStartTitleRender(): void {
    let idx = 0;
    this.sysTiemr = timer(0, 100).subscribe(() => {
      if (idx < this.sysTitleDate.length) {
        this.sysTitleStr = this.sysTitleStr + this.sysTitleDate[idx];
      } else {
        this.sysTiemr.unsubscribe();
        timer(3000).subscribe(() => {
          idx = 0;
          this.sysTitleStr = '';
          this.onStartTitleRender();
        });
      }
      idx++;
    });
  }
}
