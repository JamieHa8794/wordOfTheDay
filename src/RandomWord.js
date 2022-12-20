import React, {Component} from 'react';
import { connect } from 'react-redux';

import {addDay, subtractDay, resetDay, randomizeNumber} from './store'

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';


class WordOfTheDay extends Component{
    constructor(){
        super();
        this.randomizeNumber = this.randomizeNumber.bind(this)

    }
    randomizeNumber(){
        const {randomizeNumber} = this.props
        const {dictionary} = this.props.state
        
        randomizeNumber(dictionary.length)

    }
    render(){
        const {dictionary, pageDate, randomNumber}  = this.props.state
        const {randomizeNumber} = this

        const randomWord = dictionary.find(word => word.id*1 === randomNumber)


        if(dictionary.length === 0){
            return(
                <div className='main'>
                <Grid display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                <div className='page-heading'>
                    Random Word
                </div>
                <Paper 
                elevation={8}
                sx={{
                    p: 5,
                    width: 940
                }}
                >
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
        return(
            <div className='main'>
                <Grid display="flex" flexDirection='column' justifyContent="center" alignItems="center">
                <div className='page-heading'>
                    Random Word
                </div>
                <Paper 
                elevation={8}
                sx={{
                    p: 5,
                    width: 940
                }}
                >
                <div className='container'>
                    <div className='word-word'>
                            {randomWord.word}
                    </div>
                    <div className='word-sub-container'>
                            <div className='word-partOfSpeech'>
                                {randomWord.partOfSpeech}
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <div className='word-pronounciation'>
                                {randomWord.pronounciation}
                            </div>
                        </div>
                    <div className='word-definition'>
                            {randomWord.meaning}
                    </div>
                    <Button
                        onClick={randomizeNumber}
                        sx={{
                            color: '#A88D57'
                        }}
                        >New Random Word</Button>
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
       randomizeNumber: (length)=>{
            dispatch(randomizeNumber(length))
       }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WordOfTheDay)

