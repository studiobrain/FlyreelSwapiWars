import React, {Component, PropTypes} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {observer} from 'mobx-react'
import {extendObservable} from 'mobx'

const PORT = process.env.NODE_ENV === 'production' ? 8080 : 3000

const App = observer(class App extends Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      data: undefined,
      error: undefined
    })
  }

  componentDidMount() {
    console.log('well')
    fetch(`/people`, {
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
      this.data = response
    }).catch(error => {
      this.error = error.message || error.error
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im Here!</Text>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default App
