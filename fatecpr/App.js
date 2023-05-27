import {Text, View, TextInput,Button} from 'react-native';
import React , {useState} from 'react';

export default () => {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");

  return (
    <View style={{backgroundColor: "green",
        flex: 1, justifyContent: "center", 
        alignItems: "center"}}>
    <Text>
      Calculo de Média
    </Text>
     <Text> </Text>
    <Text>
      Informe a Primeira Nota
    </Text>
      <TextInput value={nota1} onChangeText={setNota1}/>
    <Text>
    Informe a Segunda Nota
    </Text>
      <TextInput value={nota2} onChangeText={setNota2}/>
    <Button title="Calcular" onPress={()=>{
      const n1 = parseInt(nota1);
      const n2 = parseInt(nota1); 
      const m = (n1+n2) / 2;
      alert("Média: " + m);
     }} />
</View>
  );
}