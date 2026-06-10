import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { db, auth } from "../firebase/config"; 

function CrearPosteo() {
    const [descripcionPost, setDescripcionPost] = useState(""); 

    function crearPost() {
        db.collection("posts").add({
            createdAt: Date.now(),
            email: auth.currentUser.email,
            likes: [],
            descripcionPost: descripcionPost,
        })
        .then(() => {
            setDescripcionPost("");
        })
        .catch((error) => console.log(error));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>nuevo post</Text>
            <TextInput 
                style={styles.input}
                placeholder="escribi tu post"
                value={descripcionPost}
                onChangeText={(texto) => setDescripcionPost(texto)}
            />
            <Pressable style={styles.boton} onPress={crearPost}>
                <Text style={styles.textoboton}>publicar</Text>
            </Pressable>
        </View>
    )
}

export default CrearPosteo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f7f4fb"
    },
    titulo: {
        fontSize: 26,
        fontWeight: "700",
        color: "#4b2e83",
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#d1c4e9",
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        minHeight: 100,
        textAlignVertical: "top"
    },
    boton: {
        backgroundColor: "#6a0dad",
        padding: 12,
        borderRadius: 8,
        alignItems: "center"
    },
    textoboton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
    }
})