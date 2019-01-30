import { isFSA } from 'flux-standard-action'
import invariant from 'invariant'

import {
  HOME_SET_SWITCH_STATUS_AVAILABLE_DRIVER,
  HOME_SET_SWITCH_STATUS_AUTO_BID_DRIVER,
  HOME_SET_BALANCE_AVAILABLE_DRIVER
} from '@action/home/constant'

let initialState = {
  balance: 0,
  tcashWallet: 0,
  statusAvailable: false,
  statusAutoBid: false
}

const reducer = (state = initialState, action) => {
  invariant(
    isFSA(action),
    `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
  )

  const {payload = {}} = action
  switch (action.type) {
    case HOME_SET_SWITCH_STATUS_AVAILABLE_DRIVER:
      return {...state, statusAvailable: payload.status}
    case HOME_SET_SWITCH_STATUS_AUTO_BID_DRIVER:
      return {...state, statusAutoBid: payload.status}
    case HOME_SET_BALANCE_AVAILABLE_DRIVER:
      return {...state, balance: payload.balance}
    default:
      return {...state}
  }
}

export { reducer }