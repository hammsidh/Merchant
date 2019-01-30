import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import TextInput from '../../../component/Input/TextInput/index'
import ButtonTap from '../../../component/Button/ButtonTap/index'
import Images from '@assets/images'

const {height,width} = Dimensions.get('window')

type Props = {}
class LoginActivity extends Component<Props> {
  static navigationOptions = {
    header: null
  };

  _onPressButton = () => {

  }

  _onPressLoginButton = () => {
    this.props.navigation.navigate('OTP')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={Images.junkFoodIcon}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder={'Contoh: 08123456789'}
            placeholderTextColor='#9b9b9b'
            keyboardType={'phone-pad'}
          />
          <ButtonTap
            ht={17.5} wh={1.35}
            onPress={this._onPressLoginButton}
            text={'Masuk'}
          />
        </View>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 2555)',
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: height / 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.55
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 1.35
  }
})

export default LoginActivity