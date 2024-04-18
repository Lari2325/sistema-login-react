import React, {useState} from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
import ResultImc from './ResultImc/';
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e sua altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height * height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Peencha o peso e altura")    
    }

    return(
        <View style={styles.boxForm}>
            <View style={styles.Form} >
                <Text style={styles.textForm}>Altura</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"/>

                <Text style={styles.textForm}>Peso</Text>      
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 75.00"
                    keyboardType="numeric"/>

                    <TouchableOpacity
                     style={ styles.button }
                     onPress={() => validationImc()}>
                        <Text  style={ styles.textButton }>{textButton}</Text>
                     </TouchableOpacity>

               {/* <Button 
               style={ styles.button }
               onPress={() => validationImc()} title={textButton}/> */}

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} /> 
        </View>
    );
}