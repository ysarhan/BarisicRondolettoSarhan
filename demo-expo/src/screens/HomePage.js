import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, FlatList } from "react-native";
import { db, auth } from "../firebase/config"; 
import Post from "../components/Post"

function HomePage () {
    const [postep, setPosteo] = useState([]);

    useEffect(()=> {
        db.collection("posts").onSnapshot(docs => {
            let posts = [];
            docs.forEach(doc => {
                posts.push({
                    id: doc.id,
                    data: doc.data
                })
            })
            setPosteo(posts);
        })

    }, []);

    return(
        <View>
            <Text>home</Text>
            <FlatList 
                data={posteos}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Post data={item.data}/>}
            />
        </View>
    )
}

export default HomePage