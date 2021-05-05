import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcmpButtonComponent } from './wcmp-button.component';

describe('WcmpButtonComponent', () => {
  let component: WcmpButtonComponent;
  let fixture: ComponentFixture<WcmpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcmpButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WcmpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
