import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNewWizardComponent } from './detail-new-wizard.component';

describe('DetailNewWizardComponent', () => {
  let component: DetailNewWizardComponent;
  let fixture: ComponentFixture<DetailNewWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNewWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNewWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
