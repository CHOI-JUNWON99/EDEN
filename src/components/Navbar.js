import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Collapse, Hidden } from '@mui/material';
import { Menu as MenuIcon, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../css/Navbar.css';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openTech, setOpenTech] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTechClick = () => {
    setOpenTech(!openTech);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary={t('회사소개')} />
        </ListItem>
        <ListItem button component={Link} to="/CompanyMessage">
          <ListItemText primary={t('인사말')} />
        </ListItem>
        <ListItem button component={Link} to="/CompanyHistory">
          <ListItemText primary={t('회사연혁')} />
        </ListItem>
        <ListItem button component={Link} to="/PatentsCertifications">
          <ListItemText primary={t('특허 및 인증서')} />
        </ListItem>
        <ListItem button onClick={handleTechClick}>
          <ListItemText primary={t('기술분야')} />
          {openTech ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTech} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/WaterQuality" sx={{ pl: 4 }}>
              <ListItemText primary={t('수질')} />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/technology/F1/EmSbr" sx={{ pl: 8 }}>
                <ListItemText primary="EM-SBR" />
              </ListItem>
              <ListItem button component={Link} to="/technology/F1/EmMbr" sx={{ pl: 8 }}>
                <ListItemText primary="EM-MBR" />
              </ListItem>
              <ListItem button component={Link} to="/technology/F1/EmNprs" sx={{ pl: 8 }}>
                <ListItemText primary="EM-NPRS" />
              </ListItem>
              <ListItem button component={Link} to="/technology/F1/EmPwt" sx={{ pl: 8 }}>
                <ListItemText primary="EM-PWT" />
              </ListItem>
            </List>
            <ListItem button component={Link} to="/Atmosphere" sx={{ pl: 4 }}>
              <ListItemText primary={t('대기')} />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/technology/F2/BioFilter" sx={{ pl: 8 }}>
                <ListItemText primary="BIOFILTER" />
              </ListItem>
              <ListItem button component={Link} to="/technology/F2/MultyScrubber" sx={{ pl: 8 }}>
                <ListItemText primary="MULTY SCRUBBER" />
              </ListItem>
              <ListItem button component={Link} to="/technology/F2/Srs" sx={{ pl: 8 }}>
                <ListItemText primary="SRS" />
              </ListItem>
              <ListItem button component={Link} to="/technology/F2/Tos" sx={{ pl: 8 }}>
                <ListItemText primary="TOS" />
              </ListItem>
            </List>
            <ListItem button component={Link} to="/technology/F3/DrumScreen" sx={{ pl: 4 }}>
              <ListItemText primary={t('제품소개')} />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/technology/F3/DrumScreen" sx={{ pl: 8 }}>
                <ListItemText primary="DRUM SCREEN" />
              </ListItem>
              <ListItem button component={Link} to="/technology/F3/UvSystem" sx={{ pl: 8 }}>
                <ListItemText primary={t('UV소독기')} />
              </ListItem>
              <ListItem button component={Link} to="/technology/F3/Electric" sx={{ pl: 8 }}>
                <ListItemText primary={t('전기집진기')} />
              </ListItem>
              <ListItem button component={Link} to="/technology/F3/Link" sx={{ pl: 8 }}>
                <ListItemText primary={t('링크 컨베이어')} />
              </ListItem>
              <ListItem button component={Link} to="/technology/F3/PostTreat" sx={{ pl: 8 }}>
                <ListItemText primary={t('후처리필터')} />
              </ListItem>
            </List>
            <ListItem button component={Link} to="/NavConstruction" sx={{ pl: 4 }}>
              <ListItemText primary={t('토목공사')} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/RaD">
          <ListItemText primary={t('R&D')} />
        </ListItem>
        <ListItem button component={Link} to="/NewsList">
          <ListItemText primary={t('환경뉴스')} />
        </ListItem>
        <ListItem button component={Link} to="/RequestForm">
          <ListItemText primary={t('견적의뢰')} />
        </ListItem>
        <ListItem button onClick={() => changeLanguage('en')}>
          <ListItemText primary="ENG" />
        </ListItem>
        <ListItem button onClick={() => changeLanguage('ko')}>
          <ListItemText primary="한국어" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className="navbar">
      <AppBar position="static" className="navbar-appbar">
        <Toolbar className="navbar-toolbar">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <img src="/eden_front.png" alt="Company Logo" />
            </Link>
            <Link to="/" className="navbar-logo1">
              <img src="/EDEN.logo.png" alt="Company Logo" />
            </Link>
          </div>
          <Hidden smDown>
            <div className="navbar-center">
              <div className="navbar-item">
                <Button color="inherit" className="navbar-button">{t('회사소개')}</Button>
                <div className="navbar-dropdown">
                  <Link to="/CompanyMessage">{t('인사말')}</Link>
                  <Link to="/CompanyHistory">{t('회사연혁')}</Link>
                  <Link to="/PatentsCertifications">{t('특허 및 인증서')}</Link>
                </div>
              </div>
              <div className="navbar-item">
                <Button color="inherit" className="navbar-button">{t('기술분야')}</Button>
                <div className="navbar-dropdown">
                  <div className="navbar-subitem">
                    <Link to="/WaterQuality">{t('수질')}</Link>
                    <div className="navbar-subdropdown">
                      <Link to="/technology/F1/EmSbr">EM-SBR</Link>
                      <Link to="/technology/F1/EmMbr">EM-MBR</Link>
                      <Link to="/technology/F1/EmNprs">EM-NPRS</Link>
                      <Link to="/technology/F1/EmPwt">EM-PWT</Link>
                    </div>
                  </div>
                  <div className="navbar-subitem">
                    <Link to="/Atmosphere">{t('대기')}</Link>
                    <div className="navbar-subdropdown">
                      <Link to="/technology/F2/BioFilter">BIOFILTER</Link>
                      <Link to="/technology/F2/MultyScrubber">MULTY SCRUBBER</Link>
                      <Link to="/technology/F2/Srs">SRS</Link>
                      <Link to="/technology/F2/Tos">TOS</Link>
                    </div>
                  </div>
                  <div className="navbar-subitem">
                    <Link to="/technology/F3/DrumScreen">{t('제품소개')}</Link>
                    <div className="navbar-subdropdown">
                      <Link to="/technology/F3/DrumScreen">DRUM SCREEN</Link>
                      <Link to="/technology/F3/UvSystem">{t('UV소독기')}</Link>
                      <Link to="/technology/F3/Electric">{t('전기집진기')}</Link>
                      <Link to="/technology/F3/Link">{t('링크 컨베이어')}</Link>
                      <Link to="/technology/F3/PostTreat">{t('후처리필터')}</Link>
                    </div>
                  </div>
                  <div className="navbar-subitem">
                    <Link to="/NavConstruction">{t('토목공사')}</Link>
                  </div>
                </div>
              </div>
              <div className="navbar-item">
                <Button color="inherit" className="navbar-button" component={Link} to="/RaD">{t('R&D')}</Button>
              </div>
              <div className="navbar-item">
                <Button color="inherit" className="navbar-button" component={Link} to="/NewsList">{t('환경뉴스')}</Button>
              </div>
              <div className="navbar-item">
                <Button color="inherit" className="navbar-button" component={Link} to="/RequestForm">{t('견적의뢰')}</Button>
              </div>
            </div>
          </Hidden>
          <div className="navbar-right">
            <Hidden smDown>
              <Button color="inherit" onClick={() => changeLanguage('en')}>ENG</Button>
              <Button color="inherit" onClick={() => changeLanguage('ko')}>한국어</Button>
            </Hidden>
            <Hidden smUp>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default Navbar;
