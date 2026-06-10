import { useState, useEffect} from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../firebase/config';


function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
        if (user) {
            props.navigation.navigate('NavigationTab')
        }
    })
  }, [])

  function onSubmit() { 

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("El Login fue exitoso");
        props.navigation.navigate('NavigationTab');
      })


      .catch(error => setError(error.message))

  }

  return (
    <View>

      <Text>Login</Text>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        placeholder="Contraseña"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <Text> {error}</Text>

      <Pressable onPress={() => onSubmit()}>
        <Text>Ingresar</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate('Registro')}>
        <Text>Registrate!</Text>
      </Pressable>

    
    </View>
  );
}

export default Login;

