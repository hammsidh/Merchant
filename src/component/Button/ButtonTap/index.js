import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

const {height,width} = Dimensions.get('window')

class ButtonTap extends Component {
  render() {
    const { text, onPress, ht, wh } = this.props
    return (
      <TouchableOpacity
        style={[styles.button, {width: width / wh, height: height / ht}]}
        onPress={onPress}
      >
        <Text style={[styles.whiteText, styles.fontSize6pt]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(251, 74, 111)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(251, 74, 111)',
    padding: 5,
    elevation: 2
  },
  fontSize6pt: {
    fontSize: height/45
  },
  whiteText: {
    fontFamily: 'Montserrat Regular',
    color: 'white'
  },
})

export default ButtonTap