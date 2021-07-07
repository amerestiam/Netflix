// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.themoviedb.org/3',
  apiKey: 'ee40aea630941fa41de73b111b8cb69f',
  firebase: {
    apiKey: 'AIzaSyCjwdI1grRVaV3jlB98a3zyf8a-Ts3JxHc',
    authDomain: 'netflix-948c0.firebaseapp.com',
    databaseURL: 'https://netflix-948c0.firebaseio.com',
    projectId: 'netflix-948c0',
    storageBucket: 'netflix-948c0.appspot.com',
    messagingSenderId: '803310350898',
    appId: '1:803310350898:web:0820dcbe633813781c422b'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
