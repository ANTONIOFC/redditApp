import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasMediaComponent } from './materias-media.component';

describe('MateriasMediaComponent', () => {
  let component: MateriasMediaComponent;
  let fixture: ComponentFixture<MateriasMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
