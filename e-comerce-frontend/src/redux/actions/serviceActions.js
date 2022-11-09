import * as actionTypes from '../constants/serviceConstants'
import axios from 'axios'
import {Api} from '../../utils/Api'

export const getServices = () => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_SERVICES_REQUEST})
    
    const {data} = await Api.getRequest('/api/services')        
    dispatch({
      type: actionTypes.GET_SERVICES_SUCCESS,
      payload: JSON.parse(data), 
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SERVICES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getServiceDetails = id => async dispatch => {
  try {
    dispatch({type: actionTypes.GET_SERVICE_DETAILS_REQUEST})

    const {data} = await Api.getRequest(`/api/services/${id}`)
    const p = JSON.parse(data)
    dispatch({
      type: actionTypes.GET_SERVICE_DETAILS_SUCCESS,
      payload: {
        ...p,
      },
    })
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SERVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const removeProductDetails = () => dispatch => {
  dispatch({type: actionTypes.GET_SERVICE_DETAILS_RESET})
}
