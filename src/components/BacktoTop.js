import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

const icon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 20 20">
<path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>

export default function ScrollArrow () {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scrollTop">
      {isVisible === true ? 
        <div onClick={scrollToTop}>
          <Button variant="success">{icon}</Button>{' '}
        </div> : ''
        }
    </div>
  );
}