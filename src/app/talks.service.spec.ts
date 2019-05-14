import { async, TestBed } from '@angular/core/testing';
import { TalksService } from './talks.service';
import { asyncData, mockTalksData } from 'src/app/testing/test-helper';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryTalksDataService } from './testing/in-memory-talks-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TalkSubmission } from './model/talk-submission';

let httpClientSpy: { get: jasmine.Spy };
let talksService: TalksService;

describe('TalksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryTalksDataService, { dataEncapsulation: false })
      ],
      providers: [TalksService]
    });
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // talksService = new TalksService(<any> httpClientSpy);
  });

  it('should be created', () => {
    const service: TalksService = TestBed.get(TalksService);
    expect(service).toBeTruthy();
  });

  it('should return 2 talks to call findTalks()', (done: DoneFn) => {
    const service: TalksService = TestBed.get(TalksService);
    service.findTalks().subscribe(
      (talks) => {
        expect(talks).toEqual(mockTalksData)
        done();
      },
      fail
    );
  });

  it('should successfully submitted to call createTalks()', (done: DoneFn) => {
    const service: TalksService = TestBed.get(TalksService);
    const submitform: TalkSubmission = {
      topic: 'New Interesting Topic',
      description: 'this is a description of New Interesting Topic',
      email: 'foo@bar.com'
    };
    service.createTalk(submitform).subscribe(
      (talk) => {
        expect(talk.topic).toEqual(submitform.topic);
        done();
      },
      fail
    );
  });

});
