import fetch from 'node-fetch';
import { getAttachment } from './template';

exports.handler = async (event: { Records: [{ Sns: any; }]; }, _context: any, callback: (arg0: any, arg1: string) => void) => {
  const { Records: [{Sns}] } = event;
  const { Message } = Sns;
  const { detail } = JSON.parse(Message);

  const buildStatus = detail['build-status'];
  const buildId = detail['build-id'];
  const additionalInformation = detail['additional-information'];
  const { location: githubURL } = additionalInformation['source'];
  const githubSourceVersion = additionalInformation['source-version'];

  const attachment = getAttachment({
    buildStatus,
    githubURL,
    githubSourceVersion,
    buildId
  });

  const slackWebhookURL = process.env.SLACK_WEBHOOK;

  await fetch(slackWebhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(attachment)
  })
  callback(null, 'completed');
}