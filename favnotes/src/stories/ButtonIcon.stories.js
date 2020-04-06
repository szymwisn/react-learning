import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [(story) => <YellowBackground>{story()}</YellowBackground>],
};

export const Bulb = () => <ButtonIcon icon={bulbIcon} />;

export const Active = () => <ButtonIcon active icon={bulbIcon} />;

export const Logout = () => <ButtonIcon icon={logoutIcon} />;

export const Pen = () => <ButtonIcon icon={penIcon} />;

export const Plus = () => <ButtonIcon icon={plusIcon} />;

export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
