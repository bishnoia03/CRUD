import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpartComponent } from './subpart.component';

describe('SubpartComponent', () => {
  let component: SubpartComponent;
  let fixture: ComponentFixture<SubpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
