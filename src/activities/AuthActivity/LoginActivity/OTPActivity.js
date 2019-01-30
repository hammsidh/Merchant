import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import ButtonTap from '../../../component/Button/ButtonTap/index'
import Images from '@assets/images'

const {height,width} = Dimensions.get('window')

type Props = {}
class OTPActivity extends Component<Props> {
  static navigationOptions = {
    title: 'Kembali'
  };

  constructor (props) {
    super(props)

    this.state = {timeLeft: 30}
  }

  componentDidMount () {
    this.timer = setInterval(this._decreaseTimeLeft, 1000);
  }

  componentDidUpdate () {
    if (this.state.timeLeft === 0) {
      clearInterval(this.timer)
    }
  }

  _decreaseTimeLeft = () => {
    this.setState({timeLeft: this.state.timeLeft - 1})
  }

  _onPressButton = () => {

  }

  _onPressVerifikasiButton = () => {
    this.props.navigation.navigate('Pesanan')
  }

  _onFulfill = (code) => {

  }

  render() {
    const { timeLeft } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          {/* <Image
            source={Images.junkFoodSmall}
          /> */}
        </View>
        <View style={styles.content}>
          <Text style={[styles.caption, styles.fontBold]}>VERIFICATION USER </Text>
          <Text style={styles.captionDetails}>
            Masukkan 4 angka kode OTP yang terkirim ke kotak masuk
          </Text>

          {/* <View style={styles.handphoneDetails}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={[styles.fontRegular, styles.fontSize7pt]}>No. Handphone Anda</Text>
              <Text style={[styles.fontBold, styles.fontSize7pt]}>+628123456789</Text>
            </View>
            <Image
              style={styles.editButton}
              source={Images.editIcon}
            />
          </View> */}

          <CodeInput
            ref="otpCode"
            keyboardType="numeric"
            className={'border-b'}
            activeColor='#424242'
            inactiveColor='#979797'
            space={15}
            size={55}
            cellBorderWidth={2.5}
            codeLength={4}
            inputPosition='center'
            containerStyle={{ marginBottom: height / 7.5 }}
            codeInputStyle={{ fontWeight: '800'}}
            onFulfill={(code) => this._onFulfill(code)}
          />

          <ButtonTap
            ht={17.5} wh={1.35}
            onPress={this._onPressVerifikasiButton}
            text={'Submit'}
          />
          {/* <View style={styles.counter}>
            <Text style={styles.fontSize9pt}>{`${timeLeft}s`}</Text>
          </View> */}

          <View style={styles.counter}>
            <Text style={styles.reSendOTP}>
            Belum terima kode OTP? 
            </Text> 
            <Text style={styles.reSendclick} onPress={this._onPressVerifikasiButton}>
             Klik disini
            </Text> 
          </View>

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
    paddingTop: height / 20,
    paddingBottom: height / 19.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 1.35
  },
  caption: {
    fontSize: height / 40,
    color: '#000',
    marginBottom: height / 52.5
  },
  captionDetails: {
    marginBottom: height / 48,
    fontFamily: 'Montserrat Light',
    textAlign: 'center'
  },
  handphoneDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  reSendOTP: {
    marginBottom: height / 60,
    fontFamily: 'Montserrat Light',
    textAlign: 'center'
  },
  reSendclick: {
    marginBottom: height / 60,
    fontFamily: 'Montserrat Light',
    textAlign: 'center',
    color: 'pink'
  },
  editButton: {
    height: 20,
    width: 20,
    marginLeft: width / 35
  },
  counter: {
    width: width / 1.35,
    marginTop: height / 90,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fontBold: {
    fontFamily: 'Montserrat Bold',
    color: '#000'
  },
  fontRegular: {
    fontFamily: 'Montserrat Regular'
  },
  fontSize9pt: {
    fontSize: height / 38,
  },
  fontSize7pt: {
    fontSize: height / 50,
  }
})

export default OTPActivity