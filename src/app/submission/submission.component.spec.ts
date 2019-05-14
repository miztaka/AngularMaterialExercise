import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomMaterialModule } from '../material.module';

import { SubmissionComponent } from './submission.component';
import { HttpClientModule } from '@angular/common/http';

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ SubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass validation of description (just 120 words)', () => {

    const formControl = fixture.componentInstance.submissionForm.get('description');

    // when empty
    let inputString = "";
    formControl.setValue(inputString);

    // then falsy
    expect(formControl.valid).toBeFalsy();

    // when empty string
    inputString = "     ";

    // then falsy
    expect(formControl.valid).toBeFalsy();

    // when just 120 words
    for(let i=0; i<120; i++) {
      inputString += "hoge ";
    }
    formControl.setValue(inputString);

    // then truthy
    expect(formControl.valid).toBeTruthy();

    // when 121 words
    inputString += "hoge";
    formControl.setValue(inputString);

    // then falsy
    expect(formControl.valid).toBeFalsy();

    // when separated multi spaces
    inputString = "";
    for(let i=0; i<120; i++) {
      inputString += "hoge  ";
    }
    formControl.setValue(inputString);

    // then truthy
    expect(formControl.valid).toBeTruthy();

    // when separated by \n and 121 words
    inputString = "";
    for(let i=0; i<121; i++) {
      inputString += "hoge\n";
    }
    formControl.setValue(inputString);

    // then falsy
    expect(formControl.valid).toBeFalsy();

  });
});
