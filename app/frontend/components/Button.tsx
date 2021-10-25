import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => (
  <button className='btn' {...props}>
    {children}
  </button>
);
