import { Injectable } from '@angular/core';
import { Talk } from './model/talk';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TalkSubmission } from './model/talk-submission';
import { AuthenticationService } from './auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  private endpoint = environment.apiBase + '/talks';

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
    ) { }

  findTalks(): Observable<Talk[]> {
    return this.httpClient.get<Talk[]>(this.endpoint);
  }

  createTalk(talkSubmission: TalkSubmission): Observable<Talk> {

    const idToken = this.authenticationService.getIdToken();
    console.debug(idToken);
    const headers = {
      'Authorization': 'Bearer ' + idToken
    };
    
    return this.httpClient.post<Talk>(this.endpoint, talkSubmission, {
      headers
    });
  }
}
