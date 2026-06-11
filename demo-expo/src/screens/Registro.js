 import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../firebase/config';

function Registro (props) {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function onSubmit() {

    auth.createUserWithEmailAndPassword(email, contraseña)
      .then((userCredential) => {
        db.collection('users').add({
          email: userCredential.user.email,
          username: username,
        })
        .then(() => {
          props.navigation.navigate('Login');
        })
      })
      .catch(error => setError(error.message));

  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Registro</Text>

      <TextInput style={styles.espacio}
        placeholder="Nombre de usuario"
        keyboardType="default"
        onChangeText={text => setUsername(text)}
        value={username}
      />

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
        onChangeText={text => setContraseña(text)}
        value={contraseña}
      />

      <Text style={styles.error}> {error}</Text>

      <Pressable style={styles.boton}  onPress={() => onSubmit()}>
        <Text style={styles.registrarse}>Registrarse</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate("Login")}>
        <Text style={styles.link}>Inicia sesión</Text>
      </Pressable>

  
    </View>
  );
}

export default Registro

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
  registrarse: {
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