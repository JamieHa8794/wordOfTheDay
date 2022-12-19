import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route } from 'react-router-dom';

import {loading, loadDictionary, addDay, subtractDay, resetDay} from './store'

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';


class _App extends Component{
    constructor(){
        super();
        this.addDay = this.addDay.bind(this)
        this.subtractDay = this.subtractDay.bind(this)
        this.resetDay = this.resetDay.bind(this)

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
    resetDay(){
        const {resetDay, history} = this.props;
        resetDay(history);
    }
    render(){
        const {dictionary, pageDate} = this.props.state
        const {addDay, subtractDay, resetDay} = this
        // console.log(pageDate)

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const convertDay = (1000 * 3600 * 24)
        const date = pageDate
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        // console.log(month, day, year)
        const fullDate = month + ' ' + day + ', ' + year;
        const today = new Date()



        const nextDate = new Date(Number(date))
        nextDate.setDate(date.getDate() + 1)

        const prevDate = new Date(Number(date))
        prevDate.setDate(date.getDate() - 1)

        console.log(pageDate.toDateString())

        if(pageDate.toDateString() === today.toDateString()){
            return(
                <div className='main'>
                    <Paper elevation={3}>

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
                        {/* <button onClick={addDay}>Add Day</button> */}

                        <div className='dateButtons'>

                            <Button
                            disabled={false}
                            size="large"
                            variant="filledTonal"
                            startIcon={<ArrowBackIosIcon />}
                            onClick={subtractDay}
                            sx={{ width: 190 }}
                            >
                            {prevDate.toDateString()}
                            </Button>


                            <Button disabled>Today</Button>


                            <Button
                            disabled={false}
                            size="large"
                            variant="filledTonal"
                            endIcon={<ArrowForwardIosIcon />}
                            onClick={addDay}
                            sx={{ width: 190 }}
                            >
                            {nextDate.toDateString()}
                            </Button>

                        </div>


                    </div>
                    </Paper>
                </div>
            )
        }

        return(
            <div className='main'>
                <Paper elevation={3}>

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
                    <div className='dateButtons'>
                        <Button
                        disabled={false}
                        size="large"
                        variant="filledTonal"
                        startIcon={<ArrowBackIosIcon />}
                        onClick={subtractDay}
                        sx={{ width: 190 }}
                        >
                        {prevDate.toDateString()}
                        </Button>
                        <Button
                        onClick={resetDay}
                        >Today</Button>

                        <Button
                        disabled={false}
                        size="large"
                        variant="filledTonal"
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={addDay}
                        sx={{ width: 190 }}
                        >
                        {nextDate.toDateString()}
                        </Button>
                    </div>

                </div>
                </Paper>
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
       },
       resetDay: (history) =>{
            dispatch(resetDay(history))
       }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App)

export default App

