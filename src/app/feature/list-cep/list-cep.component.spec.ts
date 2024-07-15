import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCepComponent } from './list-cep.component';

describe('ListCepComponent', () => {
  let component: ListCepComponent;
  let fixture: ComponentFixture<ListCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
