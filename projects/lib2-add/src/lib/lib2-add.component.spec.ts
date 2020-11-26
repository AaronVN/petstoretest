import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2AddComponent } from './lib2-add.component';

describe('Lib2AddComponent', () => {
  let component: Lib2AddComponent;
  let fixture: ComponentFixture<Lib2AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib2AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
