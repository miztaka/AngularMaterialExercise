import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Talk } from '../model/talk';
import { mockTalksData } from './test-helper';

@Injectable({
  providedIn: 'root'
})
export class InMemoryTalksDataService implements InMemoryDbService {

  createDb() {
    const talks: Talk[] = mockTalksData;
    return {talks};
  }

  genId(talks: Talk[]): number {
    return talks.length > 0 ? Math.max(...talks.map(hero => hero.id)) + 1 : 1;
  }

  /*
  public parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const replacedUrl = url.replace('/talks', 'api/talks');
    return utils.parseRequestUrl(replacedUrl);
  }
  */

}
