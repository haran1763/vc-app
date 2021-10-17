import React from 'react'
import { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomList from '../components/CustomList'
import { auth } from '../firebase'
import 'react-native-gesture-handler'


const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title:"WeChat",
            headerTitleStyle:{color:'black'},
            headerTintColor:'black',
            headerBackVisible: true,
            headerLeft: ()=>{
                <View style={{marginLeft:90}}>
                    <Avatar rounded source={{uri:auth?.currentUser?.photoURL}}/>
                </View>
            }
        })
        
    }, [])

    return (
        <SafeAreaView  >
            <ScrollView >
                <CustomList />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
