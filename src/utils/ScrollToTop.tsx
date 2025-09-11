/**
 * @file ScrollToTop.tsx
 * @brief This component scrolls the window to the top whenever the route changes.
 *
 * It uses the `useLocation` hook from `react-router-dom` to detect route changes.
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * @function ScrollToTop
 * @brief A functional component that scrolls the window to the top on route changes.
 *
 * @returns {null} This component does not render anything.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
  }, [pathname]);

  return null;
};

export default ScrollToTop;