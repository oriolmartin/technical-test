import React from "react";

interface Props {
  label: string;
  required?: boolean;
}

const FormLabel: React.FC<Props> = ({ label, required }: Props) => {
  return (
    <div className="form__label" title={label.toUpperCase()}>
      {label}
      {required && <span className="form__label__required">*</span>}
    </div>
  );
};

export default FormLabel;
