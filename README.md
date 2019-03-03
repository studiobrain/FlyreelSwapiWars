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

# Additional API endpoints can be created and added to the server/index.js file
use the `api/people` resource as a starting point:
```
app.get('/api/people', (req, res) => {
  fetch('https://swapi.co/api/people', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => {
    if (res.status !== 200) {
      res.send({code: res.status, message: 'Apparently you did something wrong!'})
      return
    }
    return res.json()
  }).then(response => {
    let peopleList = response.results.slice(0, 5)
    peopleList.map((item, i) => {
      return item['id'] = i + 1
    })
    res.send({code: 200, message: 'success', people: peopleList})
  }).catch(error => {
    console.log('error:', error)
  })
})
```

Additional API endpoints can be consumed via the example given in App.js `fetchPeople()` method
