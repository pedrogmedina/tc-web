import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermenuComponent } from './supermenu.component';

describe('SupermenuComponent', () => {
  let component: SupermenuComponent;
  let fixture: ComponentFixture<SupermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupermenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
