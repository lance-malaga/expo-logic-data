import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';

import { bookStore } from '../data/books'
import { useState } from 'react'

export default function About({navigation}) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome} >
                Welcome to the dashboard
            </Text>
            <Button mode="contained" onPress={() => addingData()}>
                Show Data
            </Button>
            {
                data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return (
                            <View style={styles.data} key={index}>
                                <List.Item
                                    title={b.title}
                                    description={
                                        b.authors && b.authors.map((a, ind) => {
                                            return(
                                                <Text key={ind}>
                                                    By {(ind ? ', ' : '') + a}
                                                </Text>
                                            )
                                        })
                                    }
                                    left={props => <List.Icon {...props} icon="folder" />}
                                />
                            
                            </View>
                        )
                    }
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    data: {
        marginTop: 20,
    }
});
