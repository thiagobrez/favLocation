import React, { Component } from 'react';
import FavoritesScreen from './FavoritesScreen';
import SearchScreen from './SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';

const FooterTabs = TabNavigator({
	Favorites: {
		screen: FavoritesScreen,
		navigationOptions: {
			tabBarLabel: 'Favorites',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-heart' : 'ios-heart-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			),
		},
	},
	Search: {
		screen: SearchScreen,
		navigationOptions: {
			tabBarLabel: 'Search',
			tabBarIcon: ({ tintColor, focused }) => (
				<Ionicons
					name={focused ? 'ios-search' : 'ios-search-outline'}
					size={26}
					style={{ color: tintColor }}
				/>
			),
		},
	},
});

export default FooterTabs;