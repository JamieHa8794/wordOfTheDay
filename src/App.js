import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route } from 'react-router-dom';

import {loading, loadDictionary, addDay, subtractDay} from './store'


class _App extends Component{
    constructor(){
        super();
        this.addDay = this.addDay.bind(this)
        this.subtractDay = this.subtractDay.bind(this)

    }
    componentDidMount(){
        this.props.load();
    }
    addDay(){
        const {pageDate} = this.props.state
        const {addDay, history} = this.props;
        addDay(pageDate, history);

    }
    subtractDay(){
        const {pageDate} = this.props.state
        const {subtractDay, history} = this.props;
        subtractDay(pageDate, history);
    }
    render(){
        const {dictionary, pageDate} = this.props.state
        const {addDay, subtractDay} = this
        console.log(pageDate)

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const convertDay = (1000 * 3600 * 24)
        const date = pageDate
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        console.log(month, day, year)
        const fullDate = month + ' ' + day + ', ' + year;

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
                    <button onClick={addDay}>Add Day</button>
                    <button onClick={subtractDay}>Subtract Day</button>
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
       },
       addDay: (date, history) =>{
            dispatch(addDay(date, history))
       },
       subtractDay: (date, history) =>{
            dispatch(subtractDay(date, history))
       }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App)

export default App

