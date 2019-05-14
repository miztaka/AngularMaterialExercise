import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup, 
  FormControl, 
  Validators, 
  ValidatorFn, 
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { TalksService } from '../talks.service';
import { TalkSubmission } from '../model/talk-submission';
import { AuthenticationService } from '../auth/authentication.service';

function wordCountValidator(maximum: Number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (!control.value) {
      return null;
    }
    const numWords = control.value.trim().replace('\n', ' ').split(/\s+/).length;
    return numWords > maximum ? {'wordCount': {value: control.value}} : null;
  };
}

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  submissionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(255)]),
    topic: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    description: new FormControl('', [Validators.required, wordCountValidator(120)])
  });
  
  constructor(
    private route: Router,
    private snackBar: MatSnackBar,
    private talksService: TalksService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.submissionForm.get("email").setValue(this.authenticationService.getEmail());
  }

  onSubmit() {
    console.log(this.submissionForm.value);
    const talkSubmission: TalkSubmission = this.submissionForm.value;
    this.talksService.createTalk(talkSubmission).subscribe(
      () => {
        this.route.navigate(['/']);
        this.snackBar.open('Topic submitted.', null, {
          duration: 3000
        });
      }
    );
  }

}
