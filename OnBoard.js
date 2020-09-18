import React, { Component } from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	StatusBar,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";
const { height, width } = Dimensions.get("window");

const slide = [
	{
		key: "one",
		title: "CARHABTEK",
		text:
			"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.",
		image: require("./images/1.jpeg"),
	},
	{
		key: "two",
		title: "Track car health",
		text:
			"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.",
		image: require("./images/2.jpeg"),
	},
	{
		key: "three",
		title: "ENJOY YOUR JOURNEY",
		text:
			"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.",
		image: require("./images/3.jpeg"),
	},
	{
		key: "three",
		title: "ENJOY YOUR JOURNEY",
		text:
			"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of.",
		image: require("./images/4.jpeg"),
	},
];
export default class OnBoard extends Component {
	constructor(props) {
		super(props);
		this.onPressButton = this.onPressButton.bind(this);
		this.state = {};
	}
	onPressButton() {
		const { navigate } = this.props.navigation;
		navigate("Details");
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden />

				<Swiper
					showsPagination={true}
					activeDotStyle={{
						backgroundColor: "white",
						width: 20,
					}}
					decelerationRate="fast"
				>
					{slide.map((item) => (
						<View key={item.key} style={styles.slide}>
							{/* the image */}
							<Image style={styles.image} source={item.image} />
							{/* layout on top */}
							<View
								style={{
									height: height,
									width: width,
									position: "absolute",
								}}
							>
								<Image
									style={{
										alignItems: "center",
										justifyContent: "center",
									}}
									source={require("./images/logo.png")}
								/>
								<View
									style={{
										height: height,
										marginHorizontal: "18%",
										position: "absolute",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Text
										style={{
											marginBottom: "10%",
											color: "white",
											fontSize: 35,
											fontWeight: "bold",
										}}
									>
										{item.title}
									</Text>
									<Text style={{ color: "white", fontSize: 15 }}>
										{item.text}
									</Text>
									<View
										style={{
											marginTop: "40%",
											width: (width * 60) / 100,
											borderRadius: 90,
											alignItems: "center",
											justifyContent: "center",
											backgroundColor: "#00000080",
											color: "#FFFFFF",
										}}
									>
										<View opacity={1}>
											<TouchableOpacity onPress={this.onPressButton}>
												<Text style={{ color: "white", fontSize: 50 }}>
													START
												</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</View>
					))}
				</Swiper>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	slide: {
		flex: 1,
	},
	image: {
		width: width,
		height: height,
	},
	container: {
		flex: 1,
	},
});
