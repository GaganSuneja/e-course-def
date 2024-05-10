import React from 'react';
import classNames from 'classnames/bind';
import s from './button.scss';

const cx = classNames.bind(s);

export const PrimaryButton = props => {
  const isDisabled = props.isActive !== undefined ? !props.isActive : false;
  const classes = cx(['dfa-btn', 'dfa-btn-primary', props.className ? props.className : '', { disabled: isDisabled }]);

  return (
    <button onClick={props.OnClick}
            className={classes} disabled={isDisabled}>
      {props.btn_text}
    </button>
  );
};

export const FormInput = (props: InputProps) => {
  return (
    <div className={cx([props.enableFormClasses ? 'form-group' : ''])}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={cx([props.enableFormClasses ? 'form-control' : '', props.isDisabled?'disabled':'',props.classes])}
        disabled={props.isDisabled}
      />
    </div>
  );
};

type InputProps = {
  type: string | '',
  placeholder?: string | '',
  name?: string | '',
  value?: string | '',
  onChange: (event: any) => void,
  classes?: string | '',
  enableFormClasses?: boolean | true
  isDisabled?: boolean
}
