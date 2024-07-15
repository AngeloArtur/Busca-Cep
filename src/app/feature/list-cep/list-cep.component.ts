import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICep } from '../../core/interfaces/icep';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-list-cep',
  standalone: true,
  imports: [TableModule],
  templateUrl: './list-cep.component.html',
  styleUrl: './list-cep.component.css',
})
export class ListCepComponent {
  cepData!: ICep;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(history.state.cepData)
    this.cepData = history.state.cepData;
  }
}
