import { Injectable } from '@angular/core';
import { ICep } from '../../core/interfaces/icep';

@Injectable({
  providedIn: 'root',
})
export class CepDataService {
  private cepData!:ICep;
  constructor() {}

  public setCepData(data:ICep) {
    this.cepData = data;
  }

  public getCepData(): ICep {
    return this.cepData;
  }
}
