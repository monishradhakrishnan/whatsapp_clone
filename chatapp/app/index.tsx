// app/index.tsx
import React from "react";
import { Text,Image, View, TouchableOpacity } from "react-native";
import "../global.css";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router=useRouter();
  return (
    <View className="flex-1 items-center justify-center px-5">
    <Image className="w-50 h-45" source ={require("../assets/images/print-shop.png")}/>
    <Text className="text-3xl font-bold text-gray-900 text-center mb-2">Welcome</Text>
    <Text className="text-center text-lg mb-8">Read Our
         <Text className="text-blue-500"> Privacy Policy</Text> .Tap"Agree & Continue"</Text>
          <Text className="text-blue-500 mb-8">Terms and Conditions</Text>
    <TouchableOpacity className="bg-green-500 px-6 py-4 rounded-full w-full" onPress={()=>router.push("/login")}>
      <Text className="text-white text-center text bold text-lg">Agree and Continue</Text>
    </TouchableOpacity>
    </View>
  );
}
