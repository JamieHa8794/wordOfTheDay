import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'

import axios from "axios";

const todaysdate = new Date();


//action constatnts
const LOADED = 'LOADED'
const LOAD_DICTIONARY = 'LOAD_DICTIONARY'
const SET_DATE = 'SET_DATE'

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

const reducer = combineReducers({
    loading: loadReducers,
    dictionary: dictionaryReducers,
    pageDate: pageReducers

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

const _setDate = () =>{
    return {
        type: SET_DATE,
        date
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
        console.log(dictionary)
        dispatch(_loadDictionary(dictionary))
    }
}

const addDay = (date, history) =>{
    return (dispatch) =>{
        const date = date.setDate(date.getDate() + 1);
        dispatch(_setDate(date))

        history.push('/wordOfTheDay/')
    }
}

const subtractDay = (date, history) =>{
    return (dispatch) =>{
        const date = date.setDate(date.getDate() - 1);
        dispatch(_setDate(date))

        history.push('/wordOfTheDay/')
    }
}

export default store;
export {loading, loadDictionary, addDay, subtractDay}