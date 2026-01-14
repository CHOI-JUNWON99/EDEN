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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'ko' ? 'KOR' : 'ENG';

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemText primary={t('홈')} />
        </ListItem>
        <ListItem button component={Link} to="/CompanyMessage" onClick={handleDrawerToggle}>
          <ListItemText primary={t('인사말')} />
        </ListItem>
        <ListItem button component={Link} to="/CompanyHistory" onClick={handleDrawerToggle}>
          <ListItemText primary={t('회사연혁')} />
        </ListItem>
        <ListItem button component={Link} to="/PatentsCertifications" onClick={handleDrawerToggle}>
          <ListItemText primary={t('특허 및 인증서')} />
        </ListItem>
        <ListItem button onClick={handleTechClick}>
          <ListItemText primary={t('기술분야')} />
          {openTech ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTech} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/WaterQuality" sx={{ pl: 4 }} onClick={handleDrawerToggle}>
              <ListItemText primary={t('수질')} />
            </ListItem>
            <ListItem button component={Link} to="/Atmosphere" sx={{ pl: 4 }} onClick={handleDrawerToggle}>
              <ListItemText primary={t('대기')} />
            </ListItem>
            <ListItem button component={Link} to="/technology/F3/DrumScreen" sx={{ pl: 4 }} onClick={handleDrawerToggle}>
              <ListItemText primary={t('제품소개')} />
            </ListItem>
            <ListItem button component={Link} to="/NavConstruction" sx={{ pl: 4 }} onClick={handleDrawerToggle}>
              <ListItemText primary={t('토목공사')} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/RaD" onClick={handleDrawerToggle}>
          <ListItemText primary={t('R&D')} />
        </ListItem>
        <ListItem button component={Link} to="/NewsList" onClick={handleDrawerToggle}>
          <ListItemText primary={t('환경뉴스')} />
        </ListItem>
        <ListItem button component={Link} to="/RequestForm" onClick={handleDrawerToggle}>
          <ListItemText primary={t('견적의뢰')} />
        </ListItem>
        <ListItem button onClick={toggleLanguage}>
          <ListItemText primary={currentLang === 'KOR' ? 'ENG로 변경' : 'KOR로 변경'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className="navbar">
      <AppBar position="static" className="navbar-appbar" elevation={0}>
        <Toolbar className="navbar-toolbar">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <img src="/eden_front.png" alt="Company Logo" />
              <img src="/EDEN.logo.png" alt="EDEN" className="navbar-logo-text" />
            </Link>
          </div>
          <Hidden lgDown>
            <div className="navbar-center">
              <div className="navbar-item">
                <Button color="inherit" className="navbar-button" component={Link} to="/CompanyMessage">{t('회사소개')}</Button>
                <div className="navbar-dropdown">
                  <Link to="/CompanyMessage">{t('인사말')}</Link>
                  <Link to="/CompanyHistory">{t('회사연혁')}</Link>
                  <Link to="/PatentsCertifications">{t('특허 및 인증서')}</Link>
                </div>
              </div>
              <div className="navbar-item">
                <Button color="inherit" className="navbar-button" component={Link} to="/WaterQuality">{t('기술분야')}</Button>
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
            <Hidden lgDown>
              <button className="lang-toggle" onClick={toggleLanguage}>
                {currentLang}
              </button>
            </Hidden>
            <Hidden lgUp>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <Hidden lgUp>
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
