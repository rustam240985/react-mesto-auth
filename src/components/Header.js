import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AppContext } from '../contexts/AppContext';

function Header() {
  const [path, setPath] = useState('/sign-up');
  const [linkText, setLinkText] = useState('');
  const contextApp = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/sign-up') {
      setPath('/sign-in');
      setLinkText('Войти')
    }
    else {
      setPath('/sign-up');
      setLinkText('Регистрация')
    }
  }, [location]);

  function handleClick(e) {
    e.preventDefault();
    contextApp.signOut();
  }

  return (
    <header className="header page__header">
      <a href="#" className="header__logo"></a>
      <div className="header__menu">
        <span className="header__email">{contextApp.email}</span>
        {!contextApp.loggedIn ? <Link className="header__link" to={path}>{linkText}</Link> : <button className="header__btn-out" type="text" onClick={handleClick}>Выйти</button>}
      </div>
    </header>
  )
}

export default Header;