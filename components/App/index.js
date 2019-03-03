import React, {Component, PropTypes} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native'
import {observer} from 'mobx-react'
import {extendObservable} from 'mobx'
import {API_URL, PORT} from '../../config'

const styles = require('./styles.js')

const App = observer(class App extends Component {
  constructor(props) {
    super(props)

    extendObservable(this, {
      people: undefined,
      profile: undefined,
      error: undefined
    })
  }

  fetchPeople = () => {
    fetch(`${API_URL}/people`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => {
      return res.json()
    }).then(response => {
      this.people = response.people
      this.profile = undefined
    }).catch(error => {
      this.error = error.message || error.error
    })
  }

  fetchPerson = (id) => {
    fetch(`${API_URL}/people/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => {
      return res.json()
    }).then(response => {
      this.profile = response.profile
      this.people = undefined
    }).catch(error => {
      this.error = error.message || error.error
    })
  }

  rederListItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.fetchPerson(item.id)}>
        <View style={styles.peopleListItem}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Flyreel Swapi Wars</Text>
        <Text style={styles.subHeader}>React Developer Test</Text>
        {!!this.error && <Text>{this.error}</Text>}
        <TouchableOpacity onPress={() => this.fetchPeople()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Fetch People</Text>
          </View>
        </TouchableOpacity>
        {!!this.people && <FlatList style={styles.peopleList} data={this.people} renderItem={this.rederListItem}/>}
        {!!this.profile && <View style={styles.profile}>
          <Text style={styles.profileHeaderText}>{this.profile.name}</Text>
          <Text style={styles.profileText}>birthday: {this.profile.birth_year}</Text>
          <Text style={styles.profileText}>created: {this.profile.created}</Text>
          <Text style={styles.profileText}>edited: {this.profile.edited}</Text>
        </View>}
      </View>
    )
  }
})

export default App
