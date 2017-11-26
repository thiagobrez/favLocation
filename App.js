import React, { Component } from 'react';
import Header from './components/Header';

export default class App extends Component<{}> {
	
	state = {
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
	
  render() {
    return (
			<Header locations={this.state.locations}/>
    );
  }
}