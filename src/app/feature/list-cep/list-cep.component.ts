import { CepDataService } from './../../shared/services/cep-data.service';
import { Component } from '@angular/core';
import { ICep } from '../../core/interfaces/icep';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-cep',
  standalone: true,
  imports: [TableModule, ButtonModule, RouterLink],
  templateUrl: './list-cep.component.html',
  styleUrl: './list-cep.component.css',
})
export class ListCepComponent {
  cepData!: ICep;
  constructor(private cepDataService: CepDataService) {}

  ngOnInit() {
    this.cepData = this.cepDataService.getCepData();
    console.log(this.cepData);
  }
}
