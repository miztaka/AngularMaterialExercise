import { TalkSubmission } from './talk-submission';

export class Talk extends TalkSubmission {
  id: number;
  submittedAt: Date;
  sessionDate: Date;
  ipaddr: string;
  hostname: string;
  os: string;
  browser: string;
}
