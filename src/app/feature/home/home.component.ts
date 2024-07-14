import { Component, inject, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BuscaCepService } from '../../shared/services/busca-cep.service';
import { CepDirective } from '../../shared/directives/cep.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    NavbarComponent,
    HttpClientModule,
    ButtonModule,
    CepDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  httpClient = inject(HttpClient);
  constructor(private urlCep: BuscaCepService) {}

  ngOnInit(): void {
    this.buscarCep();
  }

  public buscarCep() {
    this.urlCep.returnCep('01001000').subscribe((value) => {
      console.log(value);
    });
  }
}
