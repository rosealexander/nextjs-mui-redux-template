import {selected} from "./navigationSlice";
import hash from 'object-hash'
import {AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import {memo, useState} from "react";
import Logo from "../../components/Logo";
import {NextLinkComposed} from "../../components/Link";
import {navigationItems} from "./navigationItems";

const Navigation = memo(() => {
  const dispatch = useDispatch()
  const [selectedKey] = useSelector(selected)
  const pages = Object.entries(navigationItems)

  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleClick = (value) => dispatch({type: 'navigation/setSelected', payload: value})

  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Toolbar disableGutters>
        <Grid
          container
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          alignItems='center'
          justifyContent='space-between'
          spacing={5}
        >
          <Grid item>
            <IconButton
              disableRipple
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
              anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
              keepMounted
              transformOrigin={{vertical: 'top', horizontal: 'left',}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              elevation={0}
              transitionDuration={100}
              sx={{display: { xs: 'block', sm: 'none' },}}
            >
              {pages.map(([key, value]) => (
                <MenuItem
                  key={hash({key: value})}
                  onClick={() => {handleClick(key); handleCloseNavMenu()}}
                  component={NextLinkComposed}
                  to={{pathname: value.path}}
                  sx={{mb:1}}
                >
                  <Typography
                    textAlign="center"
                  >
                    {value.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
          <Grid item>
            <Logo />
          </Grid>
        </Grid>
        <Grid
          sx={{display: { xs: 'none', sm: 'flex' }}}
          container
          alignItems='center'
          justifyContent='space-around'
          spacing={5}
        >
          <Grid item>
            <Logo />
          </Grid>
          {pages.map(([key, value]) => (
            <Grid item key={hash({key: value})}>
              <Button
                disableRipple
                sx={{
                  "&.MuiButtonBase-root:hover": {bgcolor: "transparent"},
                }}
                color={key === selectedKey ? 'secondary' : 'primary'}
                onClick={() => {handleClick(key); handleCloseNavMenu()}}
                component={NextLinkComposed}
                to={{pathname: value.path}}
              >
                {value.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  )
})

Navigation.displayName = "Navigation"

export default Navigation
