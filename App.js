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

const PORT = process.env.NODE_ENV === 'production' ? 8080 : 3000

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
    fetch('http://localhost:8080/people', {
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
    fetch(`http://localhost:8080/people/${id}`, {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  subHeader: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
    marginBottom: 24,
  },
  button: {
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
  peopleListItem: {
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.25)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  profileText: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
  },
})

export default App
