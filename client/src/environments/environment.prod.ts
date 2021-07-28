export const environment = {
  production: true,
  apiServerUrl: 'https://coffeeshop-flask.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'dev-coffeeshop.eu', // the auth0 domain prefix
    audience: 'coffeeshop', // the audience set for the auth0 app
    clientId: 'Wl57eGSOjp5S9szgBfujBZebwclopGeK', // the client id generated for the auth0 app
    callbackURL: 'https://coffeeshop-flask.herokuapp.com', // the base url of the running ionic application. 
  }
};
