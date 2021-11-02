import React from 'react';

interface Props {
  condition: boolean;
}

const If: React.FC<Props> = ({ children, condition }) => {
  return <>{condition && children}</>;
};

export default If;
