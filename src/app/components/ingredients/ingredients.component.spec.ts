import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientsComponent } from './ingredients.component';

describe('IngridientsComponent', () => {
  let component: IngridientsComponent;
  let fixture: ComponentFixture<IngridientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngridientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngridientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
