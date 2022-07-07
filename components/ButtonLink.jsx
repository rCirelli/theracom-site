import Link from 'next/link';
import React from 'react';

function ButtonLink({ children, linkTo, type = 'primary' }) {

  const renderPrimary = () => (
    <span
      className="hover:outline hover:outline-1 hover:outline-blue-500"
    >
      <Link href={linkTo}>{children}</Link>
    </span>
  );

  const renderSecondary = () => (
    <Link
      href={linkTo}
    >
      {children}
    </Link>
  );
    
  const buttonTypes = {
    'primary': renderPrimary(),
    'secondary': renderSecondary(),
  };

  return (
    buttonTypes[type]
  );
}

export default ButtonLink;
