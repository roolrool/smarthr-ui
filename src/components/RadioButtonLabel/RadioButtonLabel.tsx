import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { InjectedProps, withTheme } from '../../hocs/withTheme'

import { RadioButton, Props as RadioButtonProps } from '../RadioButton'

type Props = RadioButtonProps & {
  label: string
}

const RadioButtonLabelComponent: FC<Props & InjectedProps> = ({
  label,
  className = '',
  theme,
  ...props
}) => (
  <Wrapper className={className}>
    <Label className={`${props.disabled ? 'disabled' : ''}`}>
      <RadioButton {...props} />
      <Txt theme={theme}>{label}</Txt>
    </Label>
  </Wrapper>
)

export const RadioButtonLabel = withTheme(RadioButtonLabelComponent)

const Wrapper = styled.div`
  display: inline-block;
`
const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  &.disabled {
    cursor: default;
  }
`
const Txt = styled.p`
  ${({ theme }: InjectedProps) => css`
    margin: 0 0 0 ${theme.size.pxToRem(theme.size.space.XXS)};
    font-size: ${theme.size.pxToRem(theme.size.font.TALL)};
    color: ${theme.palette.TEXT_BLACK};
  `}
`
