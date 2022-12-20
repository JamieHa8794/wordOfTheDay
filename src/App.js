import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import {loading, loadDictionary} from './store'

import Nav from './Nav'
import WordOfTheDay from './WordOfTheDay';
import RandomWord from './RandomWord';


class _App extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.load();
    }
    render(){
        
        return(
            <Router>
                <Route path='/' component={Nav}/>
                <Route path='/wordOfTheDay' component={WordOfTheDay}/>
                <Route path='/randomWord' component={RandomWord}/>

            </Router>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        load: () =>{
           dispatch(loadDictionary())
           dispatch(loading())
       },
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App)

export default App

