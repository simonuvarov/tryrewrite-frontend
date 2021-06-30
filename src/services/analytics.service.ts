import mixpanel from 'mixpanel-browser';
import isBrowser from '../lib/isBrowser';

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

if (!token)
  throw new Error('NEXT_PUBLIC_MIXPANEL_TOKEN key should be specified');

const initAnalytics = () => {
  mixpanel.init(token, {
    api_host: '/a',
    debug: true,
    ignore_dnt: true
  });
};

const trackEvent = (eventName: string, props?: { [id: string]: any }) => {
  if (!isBrowser) return;
  mixpanel.track(eventName, props);
};

const identifyUser = (userId: string) => {
  if (!isBrowser) return;
  mixpanel.identify(userId);
};

const trackSignedIn = (userId: string) => {
  identifyUser(userId);
  trackEvent('Signed In');
};

const trackSignedUp = (userId: string) => {
  identifyUser(userId);
  trackEvent('Signed Up');
};

export default {
  initAnalytics,
  identifyUser,
  trackSignedUp,
  trackSignedIn
};
