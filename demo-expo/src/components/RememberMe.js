import React, {useState, UseEffect} from "react";
import {View, Text, TextInput, Pressable, StylesSheet} from "react-native";
import {auth} from "../firebase/config";

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

    
}