import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerListComponent } from './divider-list.component';

describe('DividerListComponent', () => {
  let component: DividerListComponent;
  let fixture: ComponentFixture<DividerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DividerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
