import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config"; 
import firebase from "firebase";



function Post(props){

    const usuarioYaLikeado = props.data.likes && props.data.likes.includes(auth.currentUser.email);

    function darLike(){
        db.collection("posts")
        .doc(props.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)

        })
        .catch(error => console.log("error al dar like:", error))
    }

    function sacarLike(){
        db.collection("posts")
        .doc(props.id)
        .update({
            likes: firebase.firestore.FieldValue.arrayRemove(ActionSheetIOS.currentUser.email)
        })
        .catch(error => console.log ("Error al sacar el like", error))

    }

    return(
        <View style={styles.card}>
            <Text style={styles.email}>{props.data.email}</Text>
            <Text style={styles.descripcion}>{props.data.descripcionPost}</Text>

            <Text style={styles.contadorLikes}>
                {props.data.likes ? props.data.likes.length : 0} likes
            </Text>

            <View style={styles.contenedorAcciones}>
                <Pressable onPress={usuarioYaLikeado ? sacarLike : darLike}>
                    <Text style={[styles.textoMeGusta, usuarioYaLikeado && styles.textoLikeado]}>
                        Me Gusta
                    </Text>
                </Pressable>

            <Pressable style={styles.boton} onPress={() => props.navigation.navigate("ComentarPosteo", {id: props.id})}>
               <Text style={styles.textoboton}>comentar</Text> 
            </Pressable>

            </View>
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

    contadroLikes:{
        fontSize: 13,
        color: "#c599e4",
        fontWeight: "500",
        marginBottom: 12

    },

    contenedorAcciones: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"

    },

    textoMeGusta:{
        color: "#6a0dad",
        fontWeight: "600",
        fontSize:15
    },

    textoLikeado: {
        color: "#a61a8f",
        fontWeight: "700"
    },

    boton: {
        backgroundColor: "#ede7f6", 
        padding: 8,
        borderRadius: 8, 
        alignItems: "center"
    }, 
    textoboton: {
        color: "#6a0dad",
        fontWeight: "600"
    }
})