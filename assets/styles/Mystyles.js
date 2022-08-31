import { StyleSheet } from 'react-native';

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
  export { styles1, viewChilds}