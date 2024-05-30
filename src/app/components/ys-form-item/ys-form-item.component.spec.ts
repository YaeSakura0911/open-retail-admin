import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YsFormItemComponent } from './ys-form-item.component';

describe('YsFormItemComponent', () => {
  let component: YsFormItemComponent;
  let fixture: ComponentFixture<YsFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YsFormItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YsFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
