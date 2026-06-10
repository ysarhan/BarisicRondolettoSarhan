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
    <View>

      <Text>Registro</Text>

      <TextInput
        placeholder="Nombre de usuario"
        keyboardType="default"
        onChangeText={text => setUsername(text)}
        value={username}
      />

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
        onChangeText={text => setContraseña(text)}
        value={contraseña}
      />

      <Text> {error}</Text>

      <Pressable onPress={() => onSubmit()}>
        <Text>Registrarse</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate("Login")}>
        <Text>Inicia sesión</Text>
      </Pressable>

  
    </View>
  );
}

export default Registro