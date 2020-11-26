import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibListComponent } from './lib-list.component';

describe('LibListComponent', () => {
  let component: LibListComponent;
  let fixture: ComponentFixture<LibListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
