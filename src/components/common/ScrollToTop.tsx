import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTop() {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    console.log('console hojaa', scroll)
    scroll.scrollToTop();
  }, [pathname]);
  return null
}

export default ScrollToTop;