import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itensComponent } from './itens.component';

describe('itensComponent', () => {
  let component: itensComponent;
  let fixture: ComponentFixture<itensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [itensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(itensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
