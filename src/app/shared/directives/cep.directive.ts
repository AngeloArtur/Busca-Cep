import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCep]',
  standalone: true,
})
export class CepDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const initialValue = this.el.nativeElement.value;
    const valueNumbers = initialValue.replace(/\D/g, '');

    // Verifica se a entrada é válida
    if (valueNumbers) {
      this.el.nativeElement.value = this.formatCep(valueNumbers);
    } else {
      this.el.nativeElement.value = valueNumbers.substring(
        0,
        valueNumbers.length - 1,
      );
    }
    event.stopPropagation();
  }

  private formatCep(value: string): string {
    if (value.length === 8) {
      return value.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    return value;
  }
}
