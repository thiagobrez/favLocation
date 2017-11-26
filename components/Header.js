import React, { Component } from 'react';
import Favorites from './Favorites';
import {
	Container,
	Header as NativeBaseHeader,
	Body,
	Title,
	Tabs,
	Tab
} from 'native-base';

export default class Header extends Component<{}> {
	
	render() {
		return (
			<Container>
				<NativeBaseHeader hasTabs>
					<Body>
					<Title>Favorite Locations</Title>
					</Body>
				</NativeBaseHeader>
				<Tabs initialPage={1}>
					<Tab heading="Favorites">
						<Favorites locations={this.props.locations}/>
					</Tab>
					<Tab heading="Search">
					
					</Tab>
				</Tabs>
			</Container>
		)
	}
}