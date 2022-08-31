import { useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Banner from './components/Banner'
import { styles1, viewChilds } from './assets/styles/Mystyles.js'

 //const App = () => {
  export default function App () {
    //Definición de estados con sus respectivos métodos de actualización
    const [valor1, setValor1] = useState('')
    const [valor2, setValor2] = useState('')
    const [resultado, setResultado] = useState('')
    //Metodos 
    let calcular = (oper) => {
      //Actualice el estado resultado a través de su método respectivo
      let miresultado = 0;
      switch (oper) {
        case "+":
          miresultado = parseFloat(valor1) + parseFloat(valor2);
          break;
        case "-":
          miresultado = parseFloat(valor1) - parseFloat(valor2);
          break;
        case "*":
          miresultado = parseFloat(valor1) * parseFloat(valor2);
          break;
        case "/":
          miresultado = parseFloat(valor1) / parseFloat(valor2);
          break;
      }
      setResultado(miresultado)
    }
    /* let restar = () => {
      //Actualice el estado resultado a través de su método respectivo
      setResultado(parseFloat(valor1) - parseFloat(valor2))
    } */
  return (
    //<View style={{backgroundColor:'#F8BBD0',flex:1,justifyContent:'center',alignItems:'center',borderRadius:10}}>
    //<View style={styles.container}>
    //<Text style={styles1.texts}>Hola mundo desde React Native</Text>
    <View style={[styles1.container,styles1.alingViews,{borderRadius:10, flexDirection:'column'}]}>
      <Banner img="calc.jpg"></Banner>
      {/* <View style={[viewChilds.views,styles1.alingViews,{flex:1, backgroundColor:'#EFEBE9'}]}>
        <Text>Barra de Navegación</Text>
      </View> */}
      <View style={[viewChilds.views,styles1.alingViews,{flex:5, backgroundColor:'#C8E6C9', marginBottom:10}]}>
        <Text>Valor1</Text>
        <TextInput
        placeholder='Ingrese valor1'
        style={{fontSize:20, borderWidth:2, borderColor:'#239B56', padding:10, textAlign:'center', borderRadius:5}}
        keyboardType={Number}
        onChangeText={valor1 => setValor1(valor1)}
        value={valor1}
        autoFocus
        />

<Text>Valor2</Text>
        <TextInput
        placeholder='Ingrese valor2'
        style={{fontSize:20, borderWidth:2, borderColor:'#239B56', padding:10, textAlign:'center', borderRadius:5}}
        keyboardType={Number}
        onChangeText={valor2 => setValor2(valor2)}
        value={valor2}
        />

        <Text>Resultado</Text>
        <Text>{parseFloat(resultado).toFixed(1)}</Text>
        <Text>{('\n')}</Text>
        <Text>{('\n')}</Text>

        <Button title="Sumar"
        onPress={()=> calcular("+")}
        />

        <Text>{('\n')}</Text>

        <Button title="Restar"
        onPress={()=> calcular("-")}
        />

        <Text>{('\n')}</Text>

        <Button title="Multiplicar"
        onPress={()=> calcular("*")}
        />

        <Text>{('\n')}</Text>

        <Button title="Dividir"
        onPress={()=> calcular("/")}
        />
  
      </View>
      {/* <View style={[viewChilds.views,styles1.alingViews,{flex:1, backgroundColor:'#CFD8DC', marginBottom: 10}]}>
        <Text>Footer</Text>
      </View> */}
    </View>
  );
}

/*
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7BDE2',
  
  },
  texts: {
    fontSize:18,
    fontWeight:'bold',
    color:'#880E4F'
  }, 
  alingViews:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const viewChilds = StyleSheet.create({
  views:{
    width: '80%',
    marginLeft: '5%',
    marginTop:10,
    borderRadius:10
  }
})
*/
//export default App;
