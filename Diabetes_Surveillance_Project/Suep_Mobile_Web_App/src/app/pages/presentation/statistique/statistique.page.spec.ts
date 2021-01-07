import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatistiquePage } from './statistique.page';

describe('StatistiquePage', () => {
  let component: StatistiquePage;
  let fixture: ComponentFixture<StatistiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatistiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
