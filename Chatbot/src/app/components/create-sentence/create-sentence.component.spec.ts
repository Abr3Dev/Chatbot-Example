import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSentenceComponent } from './create-sentence.component';

describe('CreateSentenceComponent', () => {
  let component: CreateSentenceComponent;
  let fixture: ComponentFixture<CreateSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSentenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
