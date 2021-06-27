import React from 'react'
import { FontAwesomeIcon } from '../../styles/icons/index';

const renderSelectField = ({ input, label, icon, options = [], meta: { error, active, submitFailed } }) => {
    const isErrorState = !active && submitFailed && error
  
    return (
      <div className='form-group field-wrapper'>
        <label>{label}</label>
        <div className={`input-container ${icon ? 'input-wrapper' : ''}`}>
          {
            icon &&
            <div className='input-icon'>
              <FontAwesomeIcon icon={icon} />
            </div>
          }
          <select
            {...input}
            className={`form-control ${isErrorState && 'error'}`}
            placeholder={label}
            >
              <option key={-1} value='' disabled>Select {label}</option>
            {options.map((entry, i) => {
              return <option key={i} value={entry.value}>{entry.label}</option>
            })}
          </select>
        </div>
        <div className='error-wrapper'>
          {isErrorState && <span>{error}</span>}
        </div>
      </div>
    )
  }

  export default renderSelectField
  