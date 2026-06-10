import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import { db, auth } from "../firebase/config";

function ComentarPosteo (props){
    const [comentario, setComentario] = useState("");
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        db.collection("comentarios").onSnapshot(docs => {
            let comentariosTraidos = [];

            docs.forEach(doc => {
                let comentariosTraidos = [];

                if (data.postId === idPost) {
                    comentariosTraidos.push({
                        id: doc.id,
                        data: data
                    });
                }
            });

            setComentarios(comentariosTraidos);
        })
    }, []);

    function agregarComentario(){
        db.collection("comentarios").add({
            postId: idPost, 
            email: auth.currentUser.email, 
            texto: comentario,
            createdAt: Date.now()
        })
        .then(() => {
            setComentario("");
        })
        .catch(error => console.log(error));
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>comentar posteo</Text>
            <TextInput 
                style={styles.input}
                placeholder="escribi un comentario"
                value={comentario}
                onChangeText={(texto) => setComentario(texto)}
            />
            <Pressable style={styles.boton} onPress={agregarComentario}>
                <Text style={styles.textoBoton}>publicar comentario</Text>
            </Pressable>

            <FlatList
                data={comentarios}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.email}>{item.data.email} </Text>
                        <Text style={styles.textoComentario}>{item.data.texto}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default ComentarPosteo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f7f4fb"
    },
    titulo: {
        fontSize: 24,
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
        marginBottom: 15
    },
    boton: {
        backgroundColor: "#6a0dad",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20
    },
    textoBoton: {
        color: "#fff",
        fontWeight: "600"
    },
    comentario: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e0d7f3",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10
    },
    email: {
        fontWeight: "700",
        color: "#4b2e83",
        marginBottom: 5
    },
    textoComentario: {
        color: "#333"
    }
});