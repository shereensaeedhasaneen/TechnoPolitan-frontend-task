import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllFaqsComponent } from './show-all-faqs.component';

describe('ShowAllFaqsComponent', () => {
  let component: ShowAllFaqsComponent;
  let fixture: ComponentFixture<ShowAllFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
