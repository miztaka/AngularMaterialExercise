import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomMaterialModule } from '../material.module'

import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { TalksService } from '../talks.service';
import { mockTalksData } from '../testing/test-helper';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {

    const mockTalksService = jasmine.createSpyObj('TalksService', ['findTalks']);
    mockTalksService.findTalks.and.returnValue(of(mockTalksData));

    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule
      ],
      declarations: [ HomeComponent ],
      providers: [
        { provide: TalksService, useValue: mockTalksService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 topics in nextSessions', async () => {
    fixture.detectChanges();
    //const homeEl: HTMLElement = fixture.debugElement.nativeElement;
    const homeEl: HTMLElement = fixture.nativeElement;
    expect(homeEl.querySelectorAll("mat-list mat-list-item").length).toBe(2);
  });
});
