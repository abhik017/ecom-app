import React from 'react';

const Card = ({...props}) => {
    const {header='', children, className='' } = props;

    return (
      <div className={`card mb-3 ${className}`}>
      {header && <div className="card-header-primary">{header}</div>}
      <div className='content'>
        <div className="card-body text-dark">
          <>
            {children}
          </>
        </div>
      </div>
      </div>
    )
};

export default Card;
