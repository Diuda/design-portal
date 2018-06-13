import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTabSingleComponent } from './search-tab-single.component';

describe('SearchTabSingleComponent', () => {
  let component: SearchTabSingleComponent;
  let fixture: ComponentFixture<SearchTabSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTabSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTabSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
