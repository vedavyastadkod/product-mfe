import { Component, signal, OnInit, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-products-mfe');
  constructor(@Optional() private translate?: TranslateService) {}
  ngOnInit(): void {
    if (this.translate) {
      this.translate.setDefaultLang('en-us');
      this.translate.use('en-us');
    }
  }
}
