import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, Button} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'blue',
            width: '100%',
            height: '8%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('./aset/taskbar.png')}
            style={{width: 50, height: 40, marginRight: 50}}
          />
          <Text style={{color: 'white'}}>KAKAK ASUH INDONESIA </Text>
        </View>

        <View
          style={{
            backgroundColor: '#00FFFF',
            width: 80,
            height: 80,
            margin: 10
          }}>
          <Image
            source={require('./aset/avatar.png')}
            style={{
              width: 50,
              height: 40,
              resizeMode: 'contain',
              alignItems:"center"
             
            }}
          />
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 10,
              height: 20,
            }}>
            Pilih Adik ASUH
          </Text>

        </View>
        <View
          style={{
            backgroundColor: '#00FFFF',
            width: 80,
            height: 80,
            margin: 10
          }}>
          <Image
            source={require('./aset/parent.png')}
            style={{
              width: 50,
              height: 40,
              resizeMode: 'contain',
              alignItems:"center"
             
            }}
          />
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 10,
              height: 20,
            }}>
            SAntri MAndiri
          </Text>

        </View>
        <View
          style={{
            backgroundColor: '#00FFFF',
            width: 80,
            height: 80,
            margin: 10
          }}>
          <Image
            source={require('./aset/parent.png')}
            style={{
              width: 50,
              height: 40,
              resizeMode: 'contain',
              alignItems:"center"
             
            }}
          />
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 10,
              height: 20,
            }}>
            Santri Belum Mandiri
          </Text>

        </View>
        <View>
            <Text
            style={{
                color:"black",
                textAlign:"left",
                fontSize:18,
                fontFamily:"arial",
        
                
            }}>Adik Asuh Saya</Text>
        </View>
        <View
        style={{
            backgroundColor:'#00FFFF',
            height:"10%",
            width:"100%"
        }}>
        <Text></Text>

        </View>
        
        
        
      </View>
    );
  }
}
export default App;
// const styles=StyleSheet.create({
// Text1:{
//     height:60,
//     width: 60,
//     backgroundColor:"#00FFFF"
// }
// })



// import React from 'react'
// import { Button, Image, ScrollView, Text, View } from 'react-native'

// class App extends React.Component{
//   render(){
//     return(
//       <ScrollView>
//         <View>
//           <Image 
//           style = {{width: 100, height:100, alignContent: 'center', alignSelf: 'center', borderRadius: 50, marginTop: 10}}
//           source={require('./aset/')}
//         </View>
//       </ScrollView>
//     )
//   }
// }
