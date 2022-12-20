import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'

import axios from "axios";

const todaysdate = new Date();


//action constatnts
const LOADED = 'LOADED'
const LOAD_DICTIONARY = 'LOAD_DICTIONARY'
const SET_DATE = 'SET_DATE'
const SET_RANDOM_NUMBER = 'SET_RANDOM_NUMBER'

//reducers

const loadReducers = (state = true, action)=>{
    if(action.type === LOADED){
        state = false
    }
    return state;
}

const dictionaryReducers = (state = [], action) =>{
    if(action.type === LOAD_DICTIONARY){
        state = action.dictionary
    }
    return state;
}

const pageReducers = (state = todaysdate, action) =>{
    if(action.type === SET_DATE){
        state = action.date
    }
    return state;
}

const numberReducer = (state = Math.floor(Math.random() * 10939), action) =>{
    if(action.type === SET_RANDOM_NUMBER){
        state = action.randomNumber;
    }
    return state;
}


const reducer = combineReducers({
    loading: loadReducers,
    dictionary: dictionaryReducers,
    pageDate: pageReducers,
    randomNumber: numberReducer

})


const store = createStore(reducer, applyMiddleware(thunk))


//action creators
const _loading = () =>{
    return {
        type: LOADED
    }
}

const _loadDictionary = (dictionary) =>{
    return{
        type: LOAD_DICTIONARY,
        dictionary
    }
}

const _setDate = (date) =>{
    return {
        type: SET_DATE,
        date
    }
}

const _RandomizeNumber = (randomNumber) =>{
    return{
        type: SET_RANDOM_NUMBER,
        randomNumber
    }
}

//thunks
const loading = () =>{
    return (dispatch) =>{
        dispatch(_loading())
    }
}

const loadDictionary = () =>{
    return async (dispatch)=>{
        const dictionary = (await axios.get('/api/dictionary')).data
        dispatch(_loadDictionary(dictionary))
    }
}

const addDay = (date, history) =>{
    return (dispatch) =>{
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + 1)
        dispatch(_setDate(copy))
    }
}

const subtractDay = (date, history) =>{
    return (dispatch) =>{
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() - 1)
        dispatch(_setDate(copy))
    }
}

const resetDay = (history) =>{
    return (dispatch) =>{
        const today = new Date();
        dispatch(_setDate(today))
    }
}

const randomizeNumber = (length) =>{
    return (dispatch) =>{
        const randomNumber =  Math.floor(Math.random() * length)
        dispatch(_RandomizeNumber(randomNumber))
    }
}

export default store;
export {loading, loadDictionary, addDay, subtractDay, resetDay, randomizeNumber}