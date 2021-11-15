import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeDefaultComponent } from './rodape-default.component';

describe('RodapeDefaultComponent', () => {
  let component: RodapeDefaultComponent;
  let fixture: ComponentFixture<RodapeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapeDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
