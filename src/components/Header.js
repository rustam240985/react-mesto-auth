import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AppContext } from '../contexts/AppContext';

function Header() {
  const [isActiveIcon, setActiveIcon] = useState(false);
  const [path, setPath] = useState('/sign-up');
  const [linkText, setLinkText] = useState('');
  const contextApp = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    setActiveIcon(false);
  }, [])

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

  function handleClickSignOut(e) {
    e.preventDefault();
    contextApp.signOut();
  }

  function handleClickSidebar(e) {
    setActiveIcon(!isActiveIcon);
  }

  return (
    <header className={`header page__header ${isActiveIcon && 'header__sidebar'}`}>
      <div class="header__row">
        <a href="#" className="header__logo"></a>
        <button className={`header__togle-sidebar ${contextApp.loggedIn ? 'header__togle-sidebar_active' : 'header__togle-sidebar_disactive'}`} onClick={handleClickSidebar}>
          <div className="header__icon">
            <span className={`header__icon-line-top ${isActiveIcon ? 'header__icon-line-top_active' : ''}`} />
            <span className={`header__icon-line-middle  ${isActiveIcon ? 'header__icon-line-middle_active' : ''}`} />
            <span className={`header__icon-line-bottom  ${isActiveIcon ? 'header__icon-line-bottom_active' : ''}`} />
          </div>
        </button>
      </div>
      {contextApp.loggedIn ? '' : <Link className="header__link" to={path}>{linkText}</Link>}

      <div className={`header__menu ${isActiveIcon ? 'header__menu_active' : ''} `}>
        <span className="header__email">{contextApp.email}</span>
        {!contextApp.loggedIn ? '' : <button className="header__btn-out" type="text" onClick={handleClickSignOut}>Выйти</button>}
      </div>
    </header>
  )
}

export default Header;