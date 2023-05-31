import Parse from 'parse';

const appId: string | undefined = process.env.REACT_APP_APP_ID_BACK4APP;
const javascriptKey: string | undefined = process.env.REACT_APP_JAVASCRIPT_KEY;

if (appId && javascriptKey) {
  Parse.initialize(appId, javascriptKey);
  Parse.serverURL = 'https://parseapi.back4app.com/';
} else {
  console.error('App ID or JavaScript Key is missing.');
}
