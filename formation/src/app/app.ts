import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.components";
import { MenuComponent } from './shared/menu/menu.component';
import { environment } from '../environments/environment';
import { PrimeModule } from './core/prime.module';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, MenuComponent, PrimeModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [MessageService]
})
export class App implements OnInit {
  protected readonly title = signal('formation');

  protected readonly isProduction = signal(environment.production);
  //isProduction: boolean = environment.production;

  ngOnInit(): void {
    // Initialization logic here
  }
}
