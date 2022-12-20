import React, {Component} from 'react';
import { connect } from 'react-redux';

import {addDay, subtractDay, resetDay} from './store'

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';


class WordOfTheDay extends Component{
    constructor(){
        super();
        this.addDay = this.addDay.bind(this)
        this.subtractDay = this.subtractDay.bind(this)
        this.resetDay = this.resetDay.bind(this)

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


        if(dictionary.length > 0){
            dictionary.map(word => {
                word.date = new Date(word.date)
            })
        }

        const todayWord = dictionary.find(word => word.date.toDateString() === pageDate.toDateString())


        if(dictionary.length === 0){
            return(
                <div className='main'>
                <Grid display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                <div className='page-heading'>
                    Word of The Day
                </div>
                <Paper 
                elevation={8}
                sx={{
                    p: 5,
                    width: 940
                }}
                >

                <div className='date'>
                    {fullDate}
                </div>

                <div className='error-container'>
                    <img className='error-img' src='../public/error.png' />
                <div className='error-heading'>
                    Opps! Something went wrong...
                </div>
                </div>
                </Paper>
                </Grid>
            </div>
            )
        }

        if(!todayWord){
            return(
            <div className='main'>
            <Grid display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                <div className='page-heading'>
                    Word of The Day
                </div>
                <Paper 
                elevation={8}
                sx={{
                    p: 5,
                    width: 940
                }}
                >

                <div className='date'>
                    {fullDate}
                </div>
                <div className='container'>

                    <div className='error-container'>
                        <img className='error-img' src='../public/oopps.png' />
                        <div className='error-heading'>
                            Opps! This date is outside of bounds.. try a future date or today!
                        </div>
                    </div>
                    <div className='error-dateButtons'>
                        <Button
                        onClick={resetDay}
                        sx={{
                            color: '#A88D57'
                        }}
                        >Today</Button>
                    </div>
                </div>
                </Paper>
                </Grid>
            </div>
            )
        }

        if(pageDate.toDateString() === today.toDateString()){
            return(
                <div className='main'>
                    <Grid display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                    <div className='page-heading'>
                        Word of The Day
                    </div>
                    <Paper 
                    elevation={8}
                    sx={{
                        p: 5,
                        width: 940
                    }}
                    >
                        
                    <div className='date'>
                        {fullDate}
                    </div>
                    <div className='container'>
                        <div className='word-word'>
                            {todayWord.word}
                        </div>
                        <div className='word-sub-container'>
                            <div className='word-partOfSpeech'>
                                {todayWord.partOfSpeech}
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div className='word-pronounciation'>
                                {todayWord.pronounciation}
                            </div>
                        </div>
                        <div className='word-definition'>
                            {todayWord.meaning}
                        </div>

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


                            <Button disabled
                            sx={{
                                color: '#A88D57'
                            }}
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
                    </Grid>
                </div>
            )
        }

        return(
            <div className='main'>
                <Grid display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                <div className='page-heading'>
                    Word of The Day
                </div>
                <Paper 
                elevation={8}
                sx={{
                    p: 5,
                    width: 940
                }}
                >

                <div className='date'>
                    {fullDate}
                </div>
                <div className='container'>
                    <div className='word-word'>
                            {todayWord.word}
                    </div>
                    <div className='word-sub-container'>
                            <div className='word-partOfSpeech'>
                                {todayWord.partOfSpeech}
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div className='word-pronounciation'>
                                {todayWord.pronounciation}
                            </div>
                        </div>
                    <div className='word-definition'>
                            {todayWord.meaning}
                    </div>
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
                        sx={{
                            color: '#A88D57'
                        }}
                        >Today</Button>

                        <Button
                        disabled={false}
                        size="large"
                        variant="filledTonal"
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={addDay}
                        sx={{ 
                            width: 190,
                        }}
                        >
                        {nextDate.toDateString()}
                        </Button>
                    </div>

                </div>
                </Paper>
                </Grid>
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


export default connect(mapStateToProps, mapDispatchToProps)(WordOfTheDay)

