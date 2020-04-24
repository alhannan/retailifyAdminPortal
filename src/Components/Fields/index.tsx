import React from "react";
import { DropdownList } from "react-widgets";

import _ from "lodash";
import "./Fields.scss";

export interface dropDownListProps {
  onChange: () => void;
  data: string[];
  valueField: string;
  textField: string;
  placeholder: string;
  value: any;
  type: string;
  label?: string;
  dropUp?: boolean;
}

export interface inputProps {
  onChange: () => void;
  label: string;
  className: string;
  placeholder: string;
  autoComplete: string;
  value: string;
  type?: string;
  iconName?: string;
}

export const Field = (props: any) =>
  props.component(_.omit(props, ["component"]));

export const renderDropdownList = ({
  onChange,
  data,
  valueField,
  textField,
  placeholder,
  value,
  type,
  label,
  dropUp
}: dropDownListProps) => {
  switch (type) {
    case "label":
      return (
        <div className="label-dropdown">
          <DropdownList
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            dropUp={dropUp && true}
            valueComponent={({ item }) => (
              <span className="flex-row">
                <p className="p2 tertiary-text">{label}:</p>
                <p className="p2 primary-text">{item[textField]}</p>
              </span>
            )}
          />
        </div>
      );
    default:
      return (
        <div className={`simple-dropdown ${ dropUp ? "dropdown-dropUp" : ""}`}>
          <DropdownList
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            dropUp={dropUp && true}
          />
        </div>
      );
  }
};

export const renderInput = ({
  placeholder,
  className,
  onChange,
  autoComplete,
  value,
  type,
}: inputProps) => (
  <input
    autoComplete={autoComplete}
    placeholder={placeholder}
    className={className}
    onChange={onChange}
    value={value}
    type={type}
  />
);

export const renderIconInput = ({
  placeholder,
  className,
  onChange,
  autoComplete,
  value,
  type,
  iconName,
}: inputProps) => (
  <div className="input-container">
    <input
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      value={value}
      type={type}
    />
    <div className={`icon ${iconName}`}/>
  </div>
);
