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
            props.navigation.navigate('TabNavigator')
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
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.field}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        style={styles.field}
        placeholder="Contraseña"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <Text style={styles.error}> {error}</Text>

      <Pressable style={styles.button} onPress={() => onSubmit()}>
        <Text style={styles.buttonTexto}>Ingresar</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate('Registro')}>
        <Text style={styles.link}>Registrate!</Text>
      </Pressable>

    
    </View>
  );
}

export default Login;

