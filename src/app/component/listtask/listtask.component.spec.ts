import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtaskComponent } from './listtask.component';

describe('ListtaskComponent', () => {
  let component: ListtaskComponent;
  let fixture: ComponentFixture<ListtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListtaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
