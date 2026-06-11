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
    <View style={styles.container}>

      <Text  style={styles.title}>Login</Text>

      <TextInput style={styles.espacio}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput style={styles.espacio}
        placeholder="Contraseña"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <Text style={styles.error}> {error}</Text>

      <Pressable style={styles.boton} onPress={() => onSubmit()}>
        <Text style={styles.ingresar}>Ingresar</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate('Registro')}>
        <Text style={styles.link}>Registrate!</Text>
      </Pressable>

    
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#f7f4fb", 
    padding: 15
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#4b2e83",
    marginBottom: 40,
    textAlign: 'center'
  },
  espacio: {
    fontSize: 15,
    borderWidth: 1.5,
    borderColor: "#4b2e83",
    backgroundColor: "#c0b5cf",
    borderRadius: 7,
    padding: 10,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#c0b5cf",
    padding: 15,
    marginBottom: 20,
    borderRadius: 7
  },
  ingresar: {
    color:  "#4b2e83",
    fontSize: 20,
    fontWeight: "700",
    textAlign: 'center'
  },
  link: {
    textAlign: "center",
    textDecorationLine: 'underline',
    color:  "#311b5d",
  },
  error: {
    color: "red",
    textAlign: "center",
    margin: 10
  }
})
