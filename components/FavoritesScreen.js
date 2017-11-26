import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
	List,
	ListItem,
	Text,
	Thumbnail,
	Body,
	Button,
} from 'native-base';

export default class FavoritesScreen extends Component<{}> {
	
	render() {
		return (
			<ScrollView>
				<List>
					{this.props.screenProps.map(location => (
						<ListItem key={location.id}>
							<Thumbnail square size={80} source={{ uri: 'https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg' }} />
							<Body>
								<Text>{location.street}</Text>
								<Text note>{location.neighborhood}</Text>
							</Body>
							<Button transparent danger>
								<Text>Remove</Text>
							</Button>
						</ListItem>
					))}
				</List>
			</ScrollView>
		)
	}
	
};