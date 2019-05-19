import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import firebase from 'firebase';


class loadingScreen extends Component {

componentDidMount(){
  this.checkifLoggedIn();
}

//create function that check whether the usr has been logged in
  checkifLoggedIn = () =>{

    firebase.auth().onAuthStateChanged(function(user)
    {
        if(user)
        {
          //if did..navigate to dashboard
          this.props.navigation.navigate('dashboardScreen');
        }else{
          this.props.navigation.navigate('loginScreen');
        }
    }.bind(this)
    
    );

  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}

export default loadingScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
