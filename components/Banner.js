import { StyleSheet, Text, View, Image } from "react-native";
import { styles1, viewChilds } from '../assets/styles/Mystyles.js'


//export default function Banner(){
const Banner = (props) => {
    return (
        <View style={[viewChilds.views,styles1.alingViews,{flex:1, backgroundColor: '#E0F2F1'}]}>
        {/* <Text>{props.title}</Text>
        <Text>{props.subtitle}</Text> */}
        <Image source={require(`../assets/images/${props.img}`)/* ('../assets/images/calc.jpg') */}
        style={{width:'100%',height:'100%',resizeMode:'stretch', borderRadius:10}}
        />

      </View>
    );
}

export default Banner;