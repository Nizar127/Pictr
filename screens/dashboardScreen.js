import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

class dashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>User Dashboard</Text>
        <Button title="Sign Out" onPress={() => firebase.auth().signOut()} />
      </View>
    );
  }
}

export default dashboardScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
