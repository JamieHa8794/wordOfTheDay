import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route } from 'react-router-dom';

import {loading, loadDictionary} from './store'


class _App extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.load();
    }
    render(){
        const {dictionary} = this.props.state

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const convertDay = (1000 * 3600 * 24)
        const date = new Date(2022, 0, 1);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        console.log(month, day, year)
        const fullDate = month + ' ' + day + ', ' + year;


        const date2 = new Date(2021, 0, 1)
        console.log(date2)

        console.log((date - date2)/convertDay)

        console.log(this.props)
        return(
            <div>
                <div className='date'>
                    {fullDate}
                </div>
                <div>
                    <ul>
                        {dictionary.map(word =>{
                            return(
                                <li>
                                    {word.word}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
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
       }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App)

export default App

