import React, { useState, useEffect } from 'react';

import classNames from 'classnames';
import parallaxStyles from '../../assets/jss/parallaxStyles';

const Parallax = ({ ...props }) => {
  let windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }

  const [transform, setTransform] = useState(
    `translate3d(0,${windowScrollTop}px,0)`,
  );

  const resetTransform = () => {
    const windowScroll = window.pageYOffset / 3;
    setTransform(`translate3d(0,${windowScroll}px,0)`);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }

    return () => {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });

  const {
    filter, className, children, style, image, small,
  } = props;
  const classes = parallaxStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });

  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        transform,
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
