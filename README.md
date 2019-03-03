# FlyreelSwapiWars
A React Native app with a local Node API clone of the Swapi people endpoint

# To run the app via iOS:
1. pull the latest from master
2. run `yarn`
3. run `yarn start`

note: make sure you have Xcode installed

# To run the app via Android:
## caveat: Android version has issues with the network calls and will need revisions to complete the data transfer
1. pull the latest from master
2. run `yarn`
3. run `start:server`
4. in another tab run `react-native run-android`

# Additional API endpoints can be created and added to the server.js file
use the `/people` resource as a starting point

Additional API endpoints can be consumed via the example given in App.js `fetchPeople()` method
