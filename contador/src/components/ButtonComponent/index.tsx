import React from 'react';

import { Button } from './styles'

interface ButtonComponentProps {
  value: string
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ value }) => {
  return (
    <Button>{value}</Button>
  )
}

export default ButtonComponent;