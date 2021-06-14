import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApercuPage } from './apercu.page';

describe('ApercuPage', () => {
  let component: ApercuPage;
  let fixture: ComponentFixture<ApercuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApercuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApercuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
