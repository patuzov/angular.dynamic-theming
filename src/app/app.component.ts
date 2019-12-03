import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-theming';

  isLight = true;

  onClick(): void {
    if(this.isLight) {
      document.documentElement.style.setProperty('--primary-color', '#000');
      document.documentElement.style.setProperty('--accent-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--primary-color', '#fff');
      document.documentElement.style.setProperty('--accent-color', '#000');
    }

    this.isLight = !this.isLight;
  }
}
