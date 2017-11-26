import React, { Component } from 'react';
import {
	List,
	ListItem,
	Text,
} from 'native-base';

export default class Favorites extends Component<{}> {
	
	render() {
		return (
			<List>
				{this.props.locations.map(location => (
					<ListItem key={location.id}>
						<Text>
							{location.street}
						</Text>
					</ListItem>
				))}
			</List>
		)
	}
	
}