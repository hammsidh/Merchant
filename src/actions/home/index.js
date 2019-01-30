import {
  HOME_ON_CHANGE_SWITCH_STATUS_AVAILABLE_DRIVER,
  HOME_ON_CHANGE_SWITCH_STATUS_AUTO_BID_DRIVER,
  HOME_ON_CHANGE_BALANCE_AVAILABLE_DRIVER,
  HOME_SET_SWITCH_STATUS_AVAILABLE_DRIVER,
  HOME_SET_SWITCH_STATUS_AUTO_BID_DRIVER,
  HOME_SET_BALANCE_AVAILABLE_DRIVER
} from './constant'

export function homeOnChangeSwitchStatusAvailableDriver (status) {
  return {type: HOME_ON_CHANGE_SWITCH_STATUS_AVAILABLE_DRIVER, payload: {status}}
}

export function homeOnChangeSwitchStatusAutoBidDriver (status) {
  return {type: HOME_ON_CHANGE_SWITCH_STATUS_AUTO_BID_DRIVER, payload: {status}}
}

export function homeOnChangeBalanceAvailabeDriver (balance) {
  return {type: HOME_ON_CHANGE_BALANCE_AVAILABLE_DRIVER, payload: {balance}}
}

export function homeSetSwitchStatusAvailableDriver (status) {
  return {type: HOME_SET_SWITCH_STATUS_AVAILABLE_DRIVER, payload: {status}}
}

export function homeSetSwitchStatusAutoBidDriver (status) {
  return {type: HOME_SET_SWITCH_STATUS_AUTO_BID_DRIVER, payload: {status}}
}

export function homeSetBalanceAvailableDriver (balance) {
  return {type: HOME_SET_BALANCE_AVAILABLE_DRIVER, payload: {balance}}
}