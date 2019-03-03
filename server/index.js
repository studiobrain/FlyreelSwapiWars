const express = require('express')
const path = require('path')
const fetch = require('node-fetch')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

app.use(cors())

app.get('/api', (req, res) => {
  console.log('/api')
  res.send({code: 200, message: 'I have arrived!'})
})

app.get('/api/people', (req, res) => {
  console.log('/api/people')
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

app.get('/api/people/:id', (req, res) => {
  console.log(`/api/people/${req.params.id}`)
  fetch(`https://swapi.co/api/people/${req.params.id}`, {
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
    res.send({code: 200, message: 'success', profile: response})
  }).catch(error => {
    this.error = error.message || error.error
  })
})

app.listen(port, () => console.log(`I can hear your thoughts on ${port}`))
