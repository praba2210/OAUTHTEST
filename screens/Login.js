import { StyleSheet, Text, View,SafeAreaView,container,Button } from 'react-native';
import React, { useEffect } from 'react';



const Login = () => {
  return (
    <View>
        <SafeAreaView>  
            <View style={styles.container}>
            <Button 
            title='Login'
            />
            </View>
        </SafeAreaView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 400
    }
})