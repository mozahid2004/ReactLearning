import React from 'react';

function Theme({ theme, setTheme }) {
  const gotoLight = () => {
    document.body.style.background = "#008B8B";
    setTheme(false);
  };

  const gotoDark = () => {
    document.body.style.background = "#ccc";
    setTheme(true);
  };

  return (
    <>
      {theme ? (
        <button className="themeBtn" onClick={gotoLight}>🌙 Dark</button>
      ) : (
        <button className="themeBtn lightMode" onClick={gotoDark}>🌞 Light</button>
      )}
    </>
  );
}

export default Theme;
