import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert,View, Text, TextInput, TouchableOpacity} from "react-native"
export default function LoginScreen(){
    const[phone, setPhone]=useState("+91");
    const router=useRouter();
    // phone number validation
    const isValidNumber = /^\+\d{2}\s?\d{10}$/.test(phone);

    const handleNext = () => {
        if(isValidNumber){
            Alert.alert("Invalid phone number.");
            return;
        }
        router.push({pathname:"/otp",params:{phone}})
    }

    return(
        <View className="flex-1 items-center justify-center px-5"> 
            {/*Heading*/}
            <Text className="text-3xl font-bold text-gray-900 mb-4">Enter Your Phone Number</Text>

            {/*Description*/}
            <Text className="text-gray-500 text-lg text-center mb-6">We will send an SMS to verify your Number</Text>
            
            {/*Phone Number Input*/}
            <TextInput
            className="border border-gray-300 rounded-lg px-4  w-full text-center"
                placeholder= "+91 1234567890"
                keyboardType= "phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            {/* Next Button*/}
        <TouchableOpacity
        className={`p-4 w-full ${isValidNumber ? "bg-green-500" : "bg-gray-300"}`}
        disabled={!isValidNumber}
        onPress={handleNext}
        >
        <Text className="text-white text-center font-bold text-lg">Next</Text>
        </TouchableOpacity>
        </View>
    );
}