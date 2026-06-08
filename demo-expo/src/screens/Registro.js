 import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../firebase/config';

function Register(props) {

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

      <TextInput
        style={styles.field}
        placeholder="Nombre de usuario"
        keyboardType="default"
        onChangeText={text => setUsername(text)}
        value={username}
      />

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
        onChangeText={text => setContraseña(text)}
        value={password}
      />

      <Text style={styles.error}> {error}</Text>

      <Pressable style={styles.button} onPress={() => onSubmit()}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate("Login")}>
        <Text style={styles.link}>Inicia sesión</Text>
      </Pressable>

  
    </View>
  );
}

export default Registro;