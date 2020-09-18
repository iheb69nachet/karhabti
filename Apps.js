import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from 'react-native-vector-icons/Ionicons';

const slides = [
  {
    key: "one",
    title: "Fix Car",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/1.png"),
  },
  {
    key: "two",
    title: "Track car health",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/2.png"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./images/3.png"),
  },
];

export default class App extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode:"contain",
            height: "100%",
            width: "100%",
            flex: 2 
          }}
        />
        <Text
          style={{
            
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
            
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign:"center",
          color:"#b5b5b5",
          fontSize:15,
          paddingHorizontal:30
          ,flex: 1 
        }}>
          {item.text}
        </Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark"
          color="red"
          size={24}
        />
      </View>
    );
  };
  _skip = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text>skip</Text>
      </View>
    );
  };
  render() {
    if (this.state.showHomePage){
      return(
        <View style={styles.buttonCircle}>
        <Text>dfsdf</Text>
      </View>
      )
    } else 
    return (
    <AppIntroSlider
      renderItem={this._renderItem} 
     
      
      showSkipButton
      renderSkipButton={this._skip}
      renderDoneButton={this._renderDoneButton}
      data={slides} 
      activeDotStyle={{
        backgroundColor:"#21465b",
        width:30,
        
      }}
     />
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});