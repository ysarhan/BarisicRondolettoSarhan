import React, {useState, UseEffect} from "react";
import {NavigationContainer} from "@react-navigation/native"
import {View, Text, TextInput, Pressable, StylesSheet} from "react-native";
import {auth} from "../firebase/config";

import Login from "../screens/Login"
import Register from "../screens/Registro"
import HomePage from "../screens/HomePage"

const Stack = createNativeStackNavigator()

function Login(props) {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    useEffect(()=> {
        auth.onAuthStateChanged (user =>{
            if (user) {
                props.navigation.navigate("MenuTab")

            }
        })
    }, []);

   const ingresar = () => {
    auth.signInWithEmailAndPassowrd(email,password)
        .
   } 
    
}


