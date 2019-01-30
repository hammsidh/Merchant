import {
  HOME_ON_CHANGE_SWITCH_STATUS_AVAILABLE_DRIVER,
  HOME_ON_CHANGE_SWITCH_STATUS_AUTO_BID_DRIVER,
  HOME_ON_CHANGE_BALANCE_AVAILABLE_DRIVER
} from '@action/home/constant'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as actHome from '@action/home/index'

function * onChangeSwitchStatusAvailableDriver (request) {
  const { payload } = request
  console.log(payload)
  try {
    // post api
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actHome.homeSetSwitchStatusAvailableDriver(payload.status))
  }
}

function * onChangeSwitchStatusAutoBidDriver (request) {
  const { payload } = request
  console.log(payload)
  try {
    // post api
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actHome.homeSetSwitchStatusAutoBidDriver(payload.status))
  }
}

function * onChangeBalanceAvailableDriver (request) {
  const { payload } = request
  console.log(payload)
  try {
    // post api
  } catch (e) {
    console.log(e)
  } finally {
    yield put(actHome.homeSetBalanceAvailableDriver(payload.balance))
  }
}

export default function * homeSaga () {
  yield takeLatest(HOME_ON_CHANGE_SWITCH_STATUS_AVAILABLE_DRIVER, onChangeSwitchStatusAvailableDriver)
  yield takeLatest(HOME_ON_CHANGE_SWITCH_STATUS_AUTO_BID_DRIVER, onChangeSwitchStatusAutoBidDriver)
  yield takeLatest(HOME_ON_CHANGE_BALANCE_AVAILABLE_DRIVER, onChangeBalanceAvailableDriver)
}