import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'
import { authNavigator, mainNavigator } from './src/navigation/index';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

type Props = {};

const AppContainer = createAppContainer(createSwitchNavigator({
    AuthNavigation: authNavigator,
    MainNavigation: mainNavigator
  },
  {
    initialRouteName: 'AuthNavigation',
  })
)

class AppAndro extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return(
      <AppContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = (state) => {
  return {
    // indicatorLogin: state.filterData.indicatorLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // checkAsyncTriger: (data) => { dispatch( checkAsyncTriger(data) ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppAndro)
