// import React, { Component } from 'react';
// import {  createAppContainer } from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import ListReposScreen from './src/screens/ListReposScreen';
// import ListStarScreen from './src/screens/ListStarScreen';
// import { importDeclaration } from '@babel/types';
// // import DetailsScreen from './src/screens/DetailsScreen/DetailsScreen';
// // import store from './src/store';

// const RootStack = createStackNavigator(
//   { 
//     Repos: {
//       screen: ListReposScreen,
//       navigationOptions: {
//         title: 'ReposList',
//         headerTintColor: '#47525E',
//         headerStyle: {
//           backgroundColor: '#ffffff'
//         }
//       }
//     },
//     Details: {
//       screen: ListStarScreen,
//       navigationOptions: {
//         title: 'StargazersList',
//         headerTintColor: '#47525E',
//         headerStyle: {
//           backgroundColor: '#ffffff'
//         }
//       }
//     },
//   },
//   {
//     initialRouteName: 'Repos',
//   }
// )
// // export default class App extends Component{
// //   render(){
// //     <Provider store={store}>
// //       <RootStack />
// //     </Provider>
// //   }
// // }
// export default App = createAppContainer(RootStack);

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import { store } from './src/stores'
import ListReposView from './src/screens/ListReposScreen/ListReposView';
import ListStarView from './src/screens/ListStarScreen/ListStarView';



const Stack = createStackNavigator({
  ListRepos: {
    screen: ListReposView
  },
  ListStar: {
    screen: ListStarView
  }
},
{
  initialRouteName: 'ListRepos'
}

);
const RootStack = createAppContainer(Stack);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootStack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
