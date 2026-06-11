import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import { auth, db} from "../firebase/config"
import Post from "../components/Post"


function MiPerfil (props){
    const [usuario, setUsuario] = useState(null);
    const [misPosts, setMisPosts] = useState([]); 

    useEffect(() => {
        let emailUsuario = auth.currentUser.email;

        db.collection("users")
            .where("email", "==", emailUsuario)
            .onSnapshot(docs => {
                let infoUsuario = null; 
                docs.forEach(doc => {
                    infoUsuario = doc.data();
                });

                setUsuario(infoUsuario);
            })
        
        db.collection("posts")
            .where("email", "==", emailUsuario)
            .onSnapshot(docs => {
                let posteos = [];

                docs.forEach(doc => {
                    posteos.push({
                        id:doc.id, 
                        data: doc.data()
                    });
                });

                setMisPosts(posteos); 
            });

    }, []);

    function logout(){
        auth.signOut()
            .then(() => {
                props.navigation.navigate("Login"); 
            })
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>mi perfil</Text>
            {usuario !== null ?(
                <View>
                    <Text style={styles.texto}>usuario: {usuario.username}</Text>
                    <Text style={styles.texto}>email: {usuario.email}</Text>
                </View>
            ) : null}
            <Text style={styles.subtitulo}>mis posteos</Text>
            <FlatList 
                style={styles.post}
                data={misPosts}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <Post 
                        data={item.data}
                        id = {item.id}
                        navigation={props.navigation}
                    />
                }
            />
            <Pressable style={styles.boton} onPress={logout}>
                <Text style={styles.textoboton}>logout</Text>
            </Pressable>
        </View>
    )
}

export default MiPerfil 

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
    subtitulo: {
        fontSize: 18, 
        fontWeight: "600",
        marginTop: 20, 
        marginBottom: 10,
        color: "#4b2e83"
    },
    texto: {
        fontSize: 15, 
        marginBottom: 8, 
        color: "#333"
    },
    post: {
        backgroundColor: "#ffffffa1",
        borderWidth: 1, 
        borderColor: "#6a0dad",
        borderRadius: 8, 
        padding: 10, 
        marginBottom: 10
    },
    boton: {
        backgroundColor: "#6a0dad",
        padding: 12, 
        borderRadius: 8, 
        alignItems: "center", 
        marginTop: 20
    },
    textoboton: {
        color: "#fff",
        fontWeight: "600"
    }
})