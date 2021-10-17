import React,{useState} from 'react'
import { useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Image,Input, Button } from 'react-native-elements'
import { auth } from '../firebase'




const LoginScreen = ({navigation}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

useEffect(() => {

    const unsubscribe=auth.onAuthStateChanged(authUser =>{
        console.log(authUser)
        if(authUser){
            navigation.replace("Home");
        }
    })
    return unsubscribe;

}, [])

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Image style={{width:200 , height:200}}source={ {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN0uCLtGBLL6RBQSAm1p-_9kh_FYMRmMtTsU3cPthjtSdrEOy4O-NPymePvYa9QCwxVw&usqp=CAU'}} />
            
            <View style={styles.inputcontainer} >
            <Input autoFocus type='email' placeholder='email' 
            onChangeText={(text)=>{setEmail(text);}}
            />
            <Input secureTextEntry type='password' placeholder='password'
            onChangeText={(text)=>{setPassword(text);}}
            />
            </View>

            <Button containerStyle={styles.Button} title='Submit'/>
            <Button containerStyle={styles.Button}
             type='outline' title='Register' onPress={()=>{
                 navigation.navigate('Register')
             }}/>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },
    inputcontainer:{
        width:350,
    },
    Button:{
        marginTop:10,
        width:200
    }
})
