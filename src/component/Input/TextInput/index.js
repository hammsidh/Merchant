import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  TextInput as NativeTextInput
} from 'react-native'

const {height,width} = Dimensions.get('window')

class TextInput extends Component {
  render() {
    const { placeholder, placeholderTextColor, keyboardType } = this.props
    return (
      <NativeTextInput
        style={styles.formInputText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />
    )
  }
}

const styles = StyleSheet.create({
  formInputText: {
    fontFamily: 'Montserrat Regular',
    width: width / 1.35,
    marginBottom: height / 50,
    borderColor: 'gray',
    borderWidth: 1
  }
})
export default TextInput