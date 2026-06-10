import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import { db, auth } from "../firebase/config"; 
import Post from "../components/Post"


function HomePage (props) {
    const [posteo, setPosteo] = useState([]);

    useEffect(()=> {
        db.collection("posts").onSnapshot(docs => {
            let posts = [];
            docs.forEach(doc => {
                posts.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            setPosteo(posts);
        })

    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>home</Text>
            <FlatList 
                data={posteo}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <Post 
                        data={item.data}
                        id = {item.id}
                        navigation={props.navigation}
                        />}
                
            />
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#f7f4fb", 
        padding: 15
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#4b2e83",
        marginBottom: 15
    }
})