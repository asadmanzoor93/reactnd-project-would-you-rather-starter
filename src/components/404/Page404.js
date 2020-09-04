import React from 'react';

import './index.css';

const Page404 = () => {
  return (
    <div>
      <div className="error-page">
        <div className="error-block">
          <img src="/images/error-404.svg" alt="Error 404" />
          <h1>Page Not Found!</h1>
          <h3 className="copy">
            The page you are looking for may have been moved or renamed.
            <br />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page404;
