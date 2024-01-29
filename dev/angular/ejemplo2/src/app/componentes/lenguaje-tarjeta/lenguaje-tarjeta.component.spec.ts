import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeTarjetaComponent } from './lenguaje-tarjeta.component';

describe('LenguajeTarjetaComponent', () => {
  let component: LenguajeTarjetaComponent;
  let fixture: ComponentFixture<LenguajeTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenguajeTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LenguajeTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
