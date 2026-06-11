import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config"; 

function Post(props){
    return(
        <View style={styles.card}>
            <Text style={styles.email}>{props.data.email}</Text>
            <Text style={styles.descripcion}>{props.data.descripcionPost}</Text>

            <Pressable style={styles.boton} onPress={() => props.navigation.navigate("ComentarPosteo", {id: props.id})}>
               <Text style={styles.textoboton}>comentar</Text> 
            </Pressable>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10, 
        padding: 15, 
        marginBottom: 12, 
        borderWidth: 1, 
        borderColor: "#6a0dad"
    },
    email: {
        fontWeight: "700", 
        color: "#4b2e83",
        marginBottom: 6
    }, 
    descripcion: {
        fontSize: 15, 
        color: "#333", 
        marginBottom: 10
    },
    boton: {
        backgroundColor: "#ede7f6", 
        padding: 8,
        borderRadius: 8, 
        alignItems: "center"
    }, 
    textoboton: {
        color: "6a0dad",
        fontWeight: "600"
    }
})