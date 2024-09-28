import { PostHog } from 'posthog-node';

let posthogClient = null;

export default function PostHogNode() {
  if (!posthogClient) {
    posthogClient = new PostHog('phc_siXF1wg0DmEx6zOytajbV0h0BrBjClmC4hYmS58Yacl', {
      host: 'https://eu.i.posthog.com',
    });
  }
  return posthogClient;
}