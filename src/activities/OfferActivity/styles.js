import {
  Dimensions,
  StyleSheet
} from 'react-native'

const {height,width} = Dimensions.get('window')

const switchWidth = width / 1.65
const switchButtonWidth = switchWidth / 4

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(239, 239, 239)',
    flex: 1
  },
  header: {
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 1,
    paddingTop: 20,
    marginBottom: 30
  },
  content: {
    backgroundColor: 'rgb(239, 239, 239)',
    flex: 3,
    marginBottom: 80
  },
  contentSwitch: {
    flex: 1.5,
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: 1,
    justifyContent: 'center'
  },
  contentSlider: {
    flex: 2,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems:'center'
  },
  textContainer: {
    paddingLeft: (width-switchWidth)/2,
    paddingBottom: 20
  },
  textSwitch: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: height/35,
  },
  saldo: {
    fontWeight: 'bold',
    color: 'black'
  },
  fontSize14pt: {
    color: 'black',
    fontSize: height/17.5
  },
  fontSize12pt: {
    color: 'black',
    fontSize: height/20
  },
  fontSize9pt: {
    color: 'black',
    fontSize: height/35
  },
  fontSize7pt: {
    color: 'black',
    fontSize: height/45
  },
  mr5: {
    marginRight: 5
  },
  pt10: {
    paddingTop: height/50
  },
  pt20: {
    paddingTop: height/25
  },
  slider: {
    width: 300,
    paddingTop: height/15
  }
});