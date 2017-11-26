import React, { Component } from 'react';
import {} from 'native-base';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const {height, width} = Dimensions.get('window');

export default class SearchScreen extends Component<{}> {
	
	render() {
		return (
			<View style={styles.container}>
				<MapView
					ref={map => this.mapView = map}
					// initialRegion={{
					// 	latitude,
					// 	longitude,
					// 	latitudeDelta: 0.0142,
					// 	longitudeDelta: 0.0231
					// }}
					style={styles.mapView}
					// rotateEnabled={false}
					// scrollEnabled={false}
					// zoomEnabled={false}
					// showsPointsOfInterest={false}
					// showsBuildings={false}
					// onMapReady={this._mapReady}
				>
					{/*{this.state.places.map(place => (*/}
						{/*<MapView.Marker*/}
							{/*ref={mark => place.mark = mark}*/}
							{/*key={place.id}*/}
							{/*title={place.title}*/}
							{/*description={place.description}*/}
							{/*coordinate={{*/}
								{/*latitude: place.latitude,*/}
								{/*longitude: place.longitude*/}
							{/*}}*/}
						{/*/>*/}
					{/*))}*/}
				</MapView>
				{/*<ScrollView*/}
					{/*style={styles.placesContainer}*/}
					{/*horizontal*/}
					{/*showsHorizontalScrollIndicator={false}*/}
					{/*pagingEnabled*/}
					{/*onMomentumScrollEnd={e => {*/}
						{/*const scrolled = e.nativeEvent.contentOffset.x;*/}
						{/*const place = (scrolled > 0) ? scrolled / width : 0;*/}
						{/*const {latitude, longitude, mark} = this.state.places[place];*/}
						{/*this.mapView.animateToCoordinate({*/}
							{/*latitude,*/}
							{/*longitude*/}
						{/*}, 1000);*/}
						{/*setTimeout(() => {*/}
							{/*mark.showCallout();*/}
						{/*}, 1200)*/}
					{/*}}*/}
				{/*>*/}
					{/*{this.state.places.map(place => (*/}
						{/*<View key={place.id} style={styles.place}>*/}
							{/*<Text>{place.title}</Text>*/}
							{/*<Text>{place.description}</Text>*/}
						{/*</View>*/}
					{/*))}*/}
				{/*</ScrollView>*/}
			</View>
		)
	}
	
}

const styles = StyleSheet.create({
	mapView: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	// placesContainer: {
	// 	width: '100%',
	// 	maxHeight: 200,
	// },
	// place: {
	// 	width: width - 40,
	// 	maxHeight: 200,
	// 	backgroundColor: '#FFF',
	// 	marginHorizontal: 20,
	// }
});