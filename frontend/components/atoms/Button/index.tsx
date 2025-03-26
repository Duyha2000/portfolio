import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
  onClick?: any
  type?: 'submit' | 'button' | 'reset' | undefined
}
const PrimaryButton: React.FC<Props> = ({
  title,
  onClick = () => {},
  type = 'submit',
}) => {
  return (
    <a
      target='_blank'
      href='https://drive.google.com/file/d/1QABnPXm2eK1jA32wdCnETileeeOWqvLB/view?usp=sharing
'
      rel='noopener noreferrer'
    >
      <PrimaryButtonStyled type={type} onClick={onClick}>
        {title}
      </PrimaryButtonStyled>
    </a>
  )
}

const PrimaryButtonStyled = styled.button`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`
export default PrimaryButton
