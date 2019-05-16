import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueConnectComponent } from './collegue-connect.component';

describe('CollegueConnectComponent', () => {
  let component: CollegueConnectComponent;
  let fixture: ComponentFixture<CollegueConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
