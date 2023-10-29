import { Button, View,Text } from "react-native";
import { StyleSheet,TouchableOpacity} from "react-native";

const TitleScreen = ({navigation})=>{
    return(
        <View style={{
            flex:1,
            flexDirection:'column',
          }}>
              <View style={{
                flex:1,
                height:20,
                backgroundColor:"#344955",
                justifyContent:'center',
                alignItems:'center'
              }}>
                <Text style={{
                  fontSize:20,
                  color:'white'
                }}>
                    FA23: CROSS-PLATFORM MOBILE PROG: 10267
                </Text>
              </View>
              <View style={{
                flex:5,
                backgroundColor:"#fff"
              }}>
                <View style={{
                    flex:4,
                    justifyContent:"center",
                    alignItems:'center',
                    marginLeft:50,
                    marginRight:50
                }}>
                    <Text style={[{
                    color:'black',
                    },styles.buttonText]}>
                        Gradebook app provides the details of student info, grade average and bonus of all the students. Please use the Home button at the bottom to navigate to the home page.Tap on the student card or tap on profile for more details of the student. 
                    </Text>
                </View>
                
                <TouchableOpacity
                    style = {styles.button}
                    onPress={()=>{navigation.navigate("Home")}}
                    underlayColor='#fff'>
                    <Text style={[styles.buttonText,{color:'white'}]}>Home</Text>
                </TouchableOpacity>
              </View>
          </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textPart: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 1,
    },
    button:{
        flex:0.5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#246EE9",
    },
    buttonText:{
        fontSize:20
    }

  });

export default TitleScreen