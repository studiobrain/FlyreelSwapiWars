# FlyreelSwapiWars
A React Native app with a local Node API clone of the Swapi people endpoint

# To run the app via iOS:
1. pull the latest from master
2. run `yarn`
3. run `yarn start`

note: make sure you have Xcode installed

# To run the app via Android:
## caveat: You must update the localhost calls within App.js with your local machines IP ie: http://192.168.86.107
#### example: ```fetch('http://192.168.86.107:8080/people', {...})```
1. pull the latest from master
2. run `yarn`
3. run `start:server`
4. in another tab run `react-native run-android`

# Additional API endpoints can be created and added to the server.js file
use the `/people` resource as a starting point

Additional API endpoints can be consumed via the example given in App.js `fetchPeople()` method
