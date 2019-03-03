const Dimensions = require('Dimensions')

module.exports = {
  'container': {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  'header': {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  'subHeader': {
    fontSize: 16,
    color: 'rgba(0,0,0,0.5)',
    marginBottom: 24,
  },
  'button': {
    height: 50,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  'buttonText': {
    color: 'white',
  },
  'peopleListItem': {
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
  'profile': {
    justifyContent: 'center',
    alignItems: 'center',
  },
  'profileHeaderText': {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  'profileText': {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
  },
}
