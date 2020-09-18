import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoard from "./OnBoard";
function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<TouchableOpacity onPress={() => navigation.navigate("Details")}>
				<Text style={{ color: "white", fontSize: 50 }}>START</Text>
			</TouchableOpacity>
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={OnBoard} />
				<Stack.Screen name="Details" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
