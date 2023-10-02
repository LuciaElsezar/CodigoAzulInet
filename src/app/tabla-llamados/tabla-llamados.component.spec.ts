import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLlamadosComponent } from './tabla-llamados.component';

describe('TablaLlamadosComponent', () => {
  let component: TablaLlamadosComponent;
  let fixture: ComponentFixture<TablaLlamadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaLlamadosComponent]
    });
    fixture = TestBed.createComponent(TablaLlamadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
