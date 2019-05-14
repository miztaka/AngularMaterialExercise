import { defer } from 'rxjs';
import { Talk } from '../model/talk';

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export const mockTalksData: Talk[] = [
  {
    id: 1,
    email: 'miztaka@honestyworks.jp',
    topic: 'Some fantastic things.',
    description: 'This is a some fantastic things about hogehoge.',
    submittedAt: null,
    sessionDate: null,
    ipaddr: null,
    os: null,
    hostname: null,
    browser: null
  },
  {
    id: 2,
    email: 'miztaka@gmail.com',
    topic: 'Some fantastic things.2',
    description: 'This is a some fantastic things about hogehoge.2',
    submittedAt: null,
    sessionDate: null,
    ipaddr: null,
    os: null,
    hostname: null,
    browser: null
  }
];
