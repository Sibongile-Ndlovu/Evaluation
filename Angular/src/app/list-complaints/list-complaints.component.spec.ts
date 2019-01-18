import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { ListComplaintsComponent } from './list-complaints.component';

describe('ListComplaintsComponent', () => {
  let component: ListComplaintsComponent;
  let fixture: ComponentFixture<ListComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComplaintsComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
