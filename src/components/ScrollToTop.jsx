import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls to the top of the page when the route changes
 * Place this component near the top of your app, inside the Router but outside Routes
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When the pathname changes, scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything
  return null;
}

export default ScrollToTop;