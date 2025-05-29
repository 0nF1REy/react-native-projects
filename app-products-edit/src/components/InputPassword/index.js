import { useState } from "react";
import { TextInput,Image, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function InputPassword({source}){
    const [eye, setEye] = useState("eye-off");
    const [password, setPassword] = useState(true); 
    
    function changeState(){

        if(eye == "eye-off"){
            
            setEye("eye");
            setPassword(false);
        }else{
            setEye("eye-off");
            setPassword(true);
        }
    }

    return(
        <View>
            <Image source={source}/>
        </View>
    );

}