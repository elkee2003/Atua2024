import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    header:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20,
        textAlign:'center'
    },
    input:{
        borderWidth:1,
        borderRadius:20,
        textAlign:'center',
        justifyContent:'center',
        fontSize:20,
        margin:15
    },
    description:{
        borderWidth:1,
        borderRadius:20,
        textAlign:'center',
        justifyContent:'center',
        fontSize:20,
        margin:15,
        padding:50
    },
    btn:{
        width:125,
        height:60,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00ff40',
    },
    btnTxt:{
        fontWeight:'bold',
        fontSize:25,
        padding:10
    },
    error:{
        color:'#d80b0b',
        marginHorizontal:19,
        marginTop:-13,
        marginBottom:5,
    }
})

export default styles;