import {
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  styled,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Select from '@mui/material/Select';

import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {changeThemeMode, selectThemeMode} from '../../appSlice';
import {Trans, useTranslation} from 'react-i18next';
import config from '../../config';
import { useNavigate } from 'react-router';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const languages = [
  {lang: 'en', nativeName: 'English'},
  {lang: 'de', nativeName: 'Deutsch'},
];

const Topbar = ({open, onDrawerOpen}: any) => {
  const [lang, setLang] = useState(languages[0].lang);
  const themeMode = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();
  const {t, i18n} = useTranslation();
  const cart = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <Trans i18nKey="app.title">Shopping Cart</Trans>
        </Typography>
        <Button variant="contained" color="secondary" style={{marginLeft: 'auto'}}>
          Cart Items({cart})
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
