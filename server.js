const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

app.use(cors())

app.get('/api', (req, res) => {
  res.send({code: 200, message: 'I have arrived!'})
})

app.get('api/people', (req, res) => {
  const people = fetch('https://swapi.co/api/people', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => {
    console.log(res)
    return res.json()
  }).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    this.error = error.message || error.error
  })
  console.log(people)
})

app.get('api/people/:id', (req, res) => {
  fetch(`https://swapi.co/api/people:${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(res => {
    console.log(res)
    return res.json()
  }).then(response => {
    console.log(response)
    return response
  }).catch(error => {
    this.error = error.message || error.error
  })
})

app.listen(port, () => console.log(`I can hear your thoughts on ${port}`))
