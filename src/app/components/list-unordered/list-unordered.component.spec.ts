import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnorderedComponent } from './list-unordered.component';

describe('ListUnorderedComponent', () => {
  let component: ListUnorderedComponent;
  let fixture: ComponentFixture<ListUnorderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUnorderedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListUnorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
