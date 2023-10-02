import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLlamadosComponent } from './grafico-llamados.component';

describe('GraficoLlamadosComponent', () => {
  let component: GraficoLlamadosComponent;
  let fixture: ComponentFixture<GraficoLlamadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoLlamadosComponent]
    });
    fixture = TestBed.createComponent(GraficoLlamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
