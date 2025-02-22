import React, { useState } from 'react';
import Theme from './Theme';

function Header() {
  const [theme, setTheme] = useState(true); // Move state here

  return (
    <>
      <header style={{ 
        background: theme ? "white" : "black", 
        color: theme ? "black" : "yellow" 
        }}> 
        <div className='header-container'>
          <h2 className='header-content'><a href="" style={{ color: "inherit", textDecoration: "none" }}>
              Where in the WORLD ?
            </a></h2>
          <Theme theme={theme} setTheme={setTheme} />
        </div>
      </header>
    </>
  );
}

export default Header;
