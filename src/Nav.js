import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';


class Nav extends Component{
    constructor(){
        super();
        this.state = {
            anchorElNav: null,
            anchorElUser: null
        }
        this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this)
        this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this)
        this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this)
        this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this)
        this.toLink = this.toLink.bind(this)

    }
    handleOpenNavMenu(event){
        this.setState({
            anchorElNav: event.currentTarget
        })
    };
    handleOpenUserMenu(event){
        this.setState({
            anchorElUser: event.currentTarget
        })
    };
    
    handleCloseNavMenu(){
        this.setState({
            anchorElNav: null
        })
      };
    
    handleCloseUserMenu(){
        this.setState({
            anchorElUser: null
        })
    };
    toLink(pageName){
        const {history} = this.props;
        history.push(`/${pageName}`)
    }


    render(){
        const {handleOpenNavMenu, handleCloseNavMenu, toLink} = this
        const {anchorElNav} = this.state

        const pages = ['Word of The Day', 'Random Word'];


        return(
            <AppBar 
            position="static"
            sx={{
                backgroundColor: 'white',
                color: 'black'
            }}
            >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <MenuBookRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , fontSize: 35}} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Marker Felt',
                    fontSize: 30,
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  alp[HA]bet
                </Typography>
      
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                <MenuBookRoundedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, fontSize: 35}} />


                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'Marker Felt',
                    fontSize: 30,
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  alp[HA]bet
                </Typography>
                
                
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                    <Button
                    onClick={()=> toLink('')}
                    sx={{ 
                        m: 1,
                        my: 2, 
                        color: 'black', 
                        display: 'block',
                        fontFamily: 'American Typewriter',
                        '&:hover': {
                            backgroundColor: '#A88D57',
                            boxShadow: 'none',
                        },
                        
                    }}
                    >
                    Home
                    </Button>
                    <Button
                    onClick={()=> toLink('wordoftheday')}
                    sx={{ 
                        m: 1,
                        my: 2, 
                        color: 'black', 
                        display: 'block',
                        fontFamily: 'American Typewriter',
                        '&:hover': {
                            backgroundColor: '#A85772',
                            boxShadow: 'none',
                        },
                        
                    }}
                    >
                    Word of The Day
                    </Button>
                    <Button
                    onClick={()=> toLink('randomWord')}
                    sx={{ 
                        m: 1,
                        my: 2, 
                        color: 'black', 
                        display: 'block',
                        fontFamily: 'American Typewriter',
                        '&:hover': {
                            backgroundColor: '#72A857',
                            boxShadow: 'none',
                        },
                        
                    }}
                    >
                    Random Word
                    </Button>
                </Box>


              </Toolbar>
            </Container>
          </AppBar>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state
    }
}
const mapDispatchToProps = (dispatch) =>{
 return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)