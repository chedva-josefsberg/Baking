import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/GoBuy.png';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="header">
        <a href="../HomePage" className="logo-image">
          <img src={logo} alt="Logo" />
        </a>
        <div>
          <IconButton onClick={handleMenuClick} color="inherit">
            <MenuIcon />
          </IconButton>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </>
  );
};

export default Header;
