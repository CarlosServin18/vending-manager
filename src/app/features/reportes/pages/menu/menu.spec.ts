import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportesMenu } from './menu';

describe('ReportesMenu', () => {
  let component: ReportesMenu;
  let fixture: ComponentFixture<ReportesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesMenu]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportesMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
