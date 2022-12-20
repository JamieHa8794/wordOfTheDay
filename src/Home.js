import React, {Component} from 'react'
import { connect } from 'react-redux';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


class Home extends Component{
    constructor(){
        super()
        this.redirect = this.redirect.bind(this)
    }
    redirect(page){
        const {history} = this.props;
        history.push(`/${page}`)
    }
    render(){
        const {redirect} = this
        return(
            <div className='main'>
                <div className='home-container'>
                <Paper 
                elevation={3} 
                sx={{
                    m: 5,
                    p: 5,
                    width: '50%'
                }}>
                <div className='home-sub-container'>

                    <div className='page-sub-heading'>
                        Word of The Day
                    </div>
                    <div className='page-sub-description'>
                        A new word a day keeps the dictionary away!
                    </div>
                    <div className='tryitButton'>
                        <Button
                        onClick={()=>redirect('wordoftheday')}
                        sx={{
                            color: '#A88D57'
                        }}
                        >Try it Out</Button>
                    </div>
                </div>
                </Paper>

                <Paper 
                    elevation={3} 
                    sx={{
                        m: 5,
                        p: 5,
                        width: '50%'
                    }}>

                <div className='home-sub-container'>

                    <div className='page-sub-heading'>
                        Random Word
                    </div>
                    <div className='page-sub-description'>
                        Feeling inquisitive? Learn a new random word today!
                    </div>

                    <div className='tryitButton'>

                        <Button
                        onClick={()=>redirect('randomWord')}
                        sx={{
                            color: '#A88D57'
                        }}
                        >Try it Out</Button>
                    </div>

                </div>

                </Paper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        state
    }
}
// const mapDispatchToProps = (dispatch)=>{
//  return{

//  }
// }

export default connect(mapStateToProps)(Home)
