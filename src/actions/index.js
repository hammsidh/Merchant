export const grabProductInput = (data) => {
  return {
    type: 'DATA_PRODUCT_INPUT',
    data
  }
}

export const productInput = (value) => {
  return(dispatch) => {
    return dispatch(grabProductInput(data))    
  }
}