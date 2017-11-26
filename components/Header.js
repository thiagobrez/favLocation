import React, { Component } from 'react';
import {
	Container,
	Header as NBHeader,
	Body,
	Title,
	Item,
	Input,
	Icon
} from 'native-base';

export default class Header extends Component<{}> {
	
	render() {
		if(this.props.screen === 'Favorites') {
			return (
				<NBHeader>
					<Body>
					<Title>Favorite Locations</Title>
					</Body>
				</NBHeader>
			)
		} else if(this.props.screen === 'Search'){
			return (
				<NBHeader searchBar rounded>
					<Item>
						<Icon name="ios-search" />
						<Input placeholder="Search" />
					</Item>
				</NBHeader>
			)
		}
	}
}