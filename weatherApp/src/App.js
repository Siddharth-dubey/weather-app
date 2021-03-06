/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component,Fragment} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,StatusBar,ScrollView,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


type Props = {};
class App extends Component<Props> {
  
  render() {
    return (
     <View style={styles.container}>
        <StatusBar backgroundColor='#000' barStyle="light-content" />
        <ImageBackground source={require('./assets/cloud.jpg')}  style={{width: '100%', height: '100%'}}>
          <View style={styles.mainWrap}>
                <View style={styles.headerWrap}>
                  <View style={styles.search}>
                    <Image style={styles.searchIcon} source={require('./assets/s.png')}></Image>
                  </View>
                </View>
                <View style={styles.bodyWrap}>
                  <View style={styles.navigationDots}>
                    <View style={styles.dot}></View>
                    <View style={[styles.dot,{backgroundColor:'#fff'}]}></View>
                    <View style={styles.dot}></View>
                    <View style={styles.dot}></View>
                    <View style={styles.dot}></View>
                  </View>
                    {/* <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}> */}
                  <ScrollView contentContainerStyle={styles.contentContainer} horizontal decelerationRate='normal' showsHorizontalScrollIndicator={false} snapToInterval={312} snapToAlignment={"center"} contentInset={{top: 0, left: 6, bottom: 0, right: 6}}>
                    <View style={styles.cityItem}><Text style={styles.cityName}>Warsaw</Text></View>
                    <View style={styles.cityItem}><Text style={styles.cityName}>Prague</Text></View>
                    <View style={styles.cityItem}><Text style={styles.cityName}>Stavanger</Text></View>
                    <View style={styles.cityItem}><Text style={styles.cityName}>London</Text></View>
                    <View style={styles.cityItem}><Text style={styles.cityName}>New York</Text></View>
                    <View style={styles.blank}></View>
                  </ScrollView>
                    {/* <View style={styles.fade}></View> */}
                  <View style={styles.tempWrap}>
                    <Text style={styles.temperature}>12°</Text>
                    <View style={styles.temperatureTextWrap}>
                      <Image style={styles.tempIcon} source={require('./assets/r.png')}></Image>
                      <Text style={styles.tempText}>Raining</Text>
                    </View>
                  </View>
                  <View style={styles.basicInfo}>
                    <View style={styles.basicItem}>
                      <Text style={styles.basicHeader}>Wind</Text>
                      <Text style={styles.basicItemText}>16</Text>
                      <Text style={styles.basicItemText}>Km/h</Text>
                      <View style={styles.progress}>
                        <View style={[styles.fill,{width:10}]}></View>
                      </View>
                    </View>
                    <View style={styles.basicItem}>
                      <Text style={styles.basicHeader}>Rain</Text>
                      <Text style={styles.basicItemText}>100</Text>
                      <Text style={styles.basicItemText}>%</Text>
                      <View style={styles.progress}>
                        <View style={[styles.fill,{width:70}]}></View>
                      </View>
                    </View>
                    <View style={styles.basicItem}>
                      <Text style={styles.basicHeader}>Humidity</Text>
                      <Text style={styles.basicItemText}>20</Text>
                      <Text style={styles.basicItemText}>%</Text>
                      <View style={styles.progress}>
                        <View style={[styles.fill,{width:15}]}></View>
                      </View>
                    </View>             
                  </View>
                </View>
          </View>
        </ImageBackground>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f00',
  },
  mainWrap:{
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  headerWrap:{
    height:60,
    paddingTop: 10,
    paddingHorizontal: 10,
    // backgroundColor:'#f00',
  },
  bodyWrap:{
    // flex:0,
    // height:400,
    // backgroundColor:'#fff',
  },
  navigationDots:{
    marginVertical: 10,
    // backgroundColor: '#ddd',
    height: 40,
   alignSelf: 'stretch',
   marginHorizontal: 10,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
   paddingHorizontal: 16,
  },
   contentContainer: {
    marginTop: 4,
    height: 150,
    // alignSelf: 'stretch',
    // width: 100,
    flex:0,
    // backgroundColor:'#f00',
  },
  cityItem:{
    // backgroundColor:'#000',
    width: 300,
    height: 150,
    marginHorizontal: 6,
    padding: 10,
    paddingHorizontal: 20,
  },
  cityName:{
    color: '#fff',
    fontSize:50,
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  blank:{
    width: 100,
  },
  fade:{
    height: 80,
    width:80,
    backgroundColor:'rgba(0,0,0,0.4)',
    right: 0,
    marginTop: 65,
    position: 'absolute',
  },
  tempWrap:{
    // flex: 0,
    // backgroundColor: '#f00',
    alignSelf: 'stretch',
    height:400,
  },
  temperature:{
    paddingTop: 100,
    paddingHorizontal:32,
    fontSize:100,
    color:'#fff',
    fontFamily: 'Roboto',
    fontWeight: '100',
  },
  temperatureTextWrap:{
    height: 120,
    // width: 300,
    paddingHorizontal:32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#fff',
  },
  tempText:{
    color:'#fff',
    marginHorizontal: 10,
    fontSize:20
  },
  basicInfo:{
    // flex:1,
    // backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#c3c3c3ee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  basicItem:{
    width: 100,
    height:100,
    paddingTop: 20,
    // backgroundColor: '#f00',
  },basicItemText:{
    color: '#fff',
    fontSize:20
  },basicHeader:{
    color:'#c3c3c3ee',
    fontWeight: 'bold',
    paddingBottom: 10,
  },progress:{
    marginTop:10,
    width: 70,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#c3c3c3ee',
  },
  fill:{
    // width: 50,
    height: 2,
    backgroundColor: '#f00',
  },tempIcon:{
    // backgroundColor: '#000',
    height: 40,
    width: 40,
  },search:{
    height: 50,
    width: 50,
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  searchIcon:{
    height: 30,
    width: 30,
    padding: 1,
  },dot:{
    height: 6,
    width: 6,
    borderRadius: 10,
    marginHorizontal:5,
    backgroundColor: '#c3c3c3ee',
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    headerMode: 'none',
    navigationOptions: {
        header: null
    }
  }
});

export default createAppContainer(AppNavigator);
