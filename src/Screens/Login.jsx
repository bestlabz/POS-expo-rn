import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
          });
    }, [])
  return (
    <View className="w-full h-full items-center justify-center">
        <View className="w-full items-center justify-center space-y-6">
            <TextInput inputMode='text' placeholder='Enter your ID' className="border-[1px] border-secondary_text w-[40%] p-3 rounded-lg" />

            <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-primary_color w-[150px] rounded-md items-center justify-center py-3">
                <Text className="text-[18px] font-bold text-white">Login</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})