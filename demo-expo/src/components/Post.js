import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config"; 

function Post(props){
    return(
        <View>
            <Text>{props.data.email}</Text>
            <Text>{props.data.descripcionPost}</Text>
        </View>
    )
}