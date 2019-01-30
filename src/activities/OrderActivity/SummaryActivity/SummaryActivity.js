import React, { Component } from 'react';
import {
  Dimensions,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Images from '@assets/images'
import { connect } from 'react-redux';

const {height,width} = Dimensions.get('window')
const switchWidth = width / 1.65
const switchButtonWidth = switchWidth / 4

type Props = {};
class SummaryActivity extends Component<Props> {
  static defaultProps = {

  }

  static navigationOptions = {
    title: 'Pengaturan',
    tabBarLabel: 'Pengaturan',
    tabBarIcon:({focused,tintColor}) =>
      <Image
        source={focused ? Images.userOnIcon: Images.userOffIcon}
        style={{width:width/18,height:width/18,alignSelf:'center'}}
        color={tintColor}
      />
  }

  constructor(props) {
    super(props);
    this.state = {
      switchValueStatus: false
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between'}}
        >

        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgb(239, 239, 239)',
    flex: 1
  },
  image: {
    width: 72,
    height: 72,
  },
  details: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: 5
  },
  rowDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomColor: 'rgb(239, 239, 239)',
    borderBottomWidth: 1
  },
  rowTextDetails: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: height/50,
    margin: height/45
  },
  actionButton: {
    height: height/7,
    marginTop: 5,
    marginBottom: 10,
    padding: 15,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  fontSize12pt: {
    fontSize: height/20
  },
  fontSize6pt: {
    fontSize: height/50
  },
  fontBold: {
    fontWeight: 'bold',
    color: 'black'
  },
  greyText: {
    color: '#ababab'
  },
  p5: {
    padding: 3.5
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(SummaryActivity)
