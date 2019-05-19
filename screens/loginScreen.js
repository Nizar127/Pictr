import React, {Component} from 'react';
import { StyleSheet, Text} from 'react-native';
import * as firebase from 'firebase';


import { Container, Content, Header, Form, Item, Button, Label, Input} from 'native-base';
class loginScreen extends Component {
 
    constructor(props) {
        super(props)
        this.state = ({
            email: '',
            Password: ''
        })
    }

    signUpUser = (email,Password) => {
        try{
            if (this.state.Password.length<5)
            {
                alert("Please Input 5 characters at least")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email,Password);
        }catch(error){
            console.log(error.toString())
        }

    }

    loginUser = (email,Password) =>{
            try {
               firebase.auth().signInWithEmailAndPassword(email,Password).then(function (user) {
                console.log(user)
               })
            }catch(error){
             console.log(error.toString())
            }
    }

    render() {
        return (
       <Container style= {style.container} >
           <Form>
               <Item floatingLabel>
                    <Label>Email</Label>
                    <Input 
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({email})}/>
               </Item>

               <Item floatingLabel>
                    <Label>Password</Label>
                    <Input 
                   secureTextEntry={true}
                   autoCorrect={false}
                   autoCapitalize="none"
                   onChangeText={(Password) => this.setState({Password})}
                   />
               </Item>
               <Button style={{marginTop: 10}}
                    full
                    rounded
                    success
                    onPress={()=> this.loginUser(this.state.email, this.state.Password)}
                >
                    <Text style={{color: 'white'}}>Login</Text>
               </Button>
               <Button style={{marginTop: 10}}
                    full
                    rounded
                    primary
                    onPress={()=> this.signUpUser(this.state.email, this.state.Password)}
                >
                    <Text style={{ color: 'white'}}>Register</Text>
               </Button>
           </Form>

       </Container>
        );
      }
}

export default loginScreen;

const style = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
  });
  