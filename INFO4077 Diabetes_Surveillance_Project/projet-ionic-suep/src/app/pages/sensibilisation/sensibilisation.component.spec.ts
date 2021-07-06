import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SensibilisationComponent } from './sensibilisation.component';

describe('SensibilisationComponent', () => {
  let component: SensibilisationComponent;
  let fixture: ComponentFixture<SensibilisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensibilisationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SensibilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
