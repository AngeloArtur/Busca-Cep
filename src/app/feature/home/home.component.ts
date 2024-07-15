import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BuscaCepService } from '../../shared/services/busca-cep.service';
import { CepDirective } from '../../shared/directives/cep.directive';
import { Router, RouterLink } from '@angular/router';
import { ICep } from '../../core/interfaces/icep';
import { NgClass } from '@angular/common';

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
    RouterLink,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isInvalid: boolean = false;
  constructor(
    private cepService: BuscaCepService,
    private router: Router,
  ) {}

  @ViewChild('cepInput') cep!: ElementRef;

  public searchCep(cep: string) {
    const cepNumbers = cep.replace('-', '');
    if (cep.length === 0) {
      this.isInvalid = true;
      console.log(this.isInvalid)
    } else {
      this.cepService.returnCep(cepNumbers).subscribe((value: ICep) => {
        console.log(value);
        this.router.navigate(['/cep']), { state: { cepData: value } };
      });
    }
  }
}
