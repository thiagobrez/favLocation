import React, { Component } from 'react';
import { Container } from 'native-base';
import Header from './components/Header';
import FooterTabs from './components/FooterTabs';

export default class App extends Component<{}> {
	
	state = {
		currentScreen: 'Favorites',
		locations: [
			{
				id: 1,
				cep: '88070-770',
				street: 'Rua José Bonifácio',
				neighborhood: 'Canto',
				city: 'Florianópolis',
				uf: 'SC'
			},
			{
				id: 2,
				cep: '88070-605',
				street: 'Rua Souza Dutra',
				neighborhood: 'Estreito',
				city: 'Florianópolis',
				uf: 'SC'
			}
		]
	};
	
	getCurrentRouteName = (navigationState) => {
		if (!navigationState) return null;
		const route = navigationState.routes[navigationState.index];
		if (route.routes) return getCurrentRouteName(route);
		return route.routeName;
	};
	
  render() {
    return (
			<Container>
				<Header screen={this.state.currentScreen}/>
				<FooterTabs screenProps={this.state.locations}
										onNavigationStateChange={(prevState, currentState) => {
											this.setState(
												{currentScreen: this.getCurrentRouteName(currentState)}
											);
										}}
				/>
			</Container>
    );
  }
  
}