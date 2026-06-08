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
        <View>
            <Text>nuevo post</Text>
            <TextInput 
                placeholder="escribi tu post"
                value={descripcionPost}
                onChangeText={(texto) => setDescripcionPost(texto)}
            />
            <Pressable onPress={crearPost}>
                <Text>publicar</Text>
            </Pressable>
        </View>
    )
}

export default CrearPosteo