import React, { Component } from 'react';
import { FontAwesomeIcon, faEye, faEyeSlash } from '../../styles/icons/index';

class renderField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  render() {
    const {
      input,
      label,
      icon,
      type,
      inline,
      disabled,
      enableShowHidePassword = false,
      labelFirst = true,
      meta: { error, active, submitFailed },
    } = this.props;

    const {
      showPassword,
    } = this.state

    const isErrorState = !active && submitFailed && error;

    const inputType = type === 'password' && showPassword ? 'text': type

    return (
      <div className={`${inline ? 'form-inline' : 'form-group'} field-wrapper`}>
        {labelFirst && label && <label>{label}</label>}
        <div className={`input-container ${icon ? 'input-wrapper' : ''}`} >
          {icon && (
            <div className='input-icon'>
              <FontAwesomeIcon icon={icon} />
            </div>
          )}
          <input
            {...input}
            className={`form-control ${isErrorState ? 'error' : ''}`}
            placeholder={label}
            type={inputType}
            disabled={disabled}
            autoComplete='off'
            style={ inputType ==='radio' ? {boxShadow: 'none'} : {}}
          />

          {
            type === 'password' && enableShowHidePassword &&
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className='input-icon-right-end'
                onClick={() => {
                  this.setState({showPassword: !this.state.showPassword})
                }}
              />
          }
          
        </div>

        {!labelFirst && label && <label>{label}</label>}

        <div className='error-wrapper' style={{color: "red"}}>
          {isErrorState && <span>{error}</span>}
        </div>
      </div>
    );
  }
}

export default renderField;
