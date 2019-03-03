# FlyreelSwapiWars
A React Native app with a local Node API clone of the Swapi people endpoint

## caveat: You must update the API_BASE_URL within config `FlyreelSwapiWars/config/index.js` with your local machines IP ie: 
```export const API_BASE_URL = 'http://192.168.86.107' //replace the url```

# To run the app via iOS:
1. pull the latest from master
2. run `yarn`
3. run `yarn start:ios`

note: make sure you have Xcode installed

# To run the app via Android:
1. pull the latest from master
2. run `yarn`
3. run `yarn start:android`

note: make sure you are running a simulator (Android Studio or Genynmotion ect)

# Additional API endpoints can be created and added to the server.js file
use the `/people` resource as a starting point

Additional API endpoints can be consumed via the example given in App.js `fetchPeople()` method
