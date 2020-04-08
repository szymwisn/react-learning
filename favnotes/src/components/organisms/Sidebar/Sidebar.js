import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import logoIcon from 'assets/icons/logo.svg';

const StyledWrapper = styled.div`
  width: 153px;
  height: 100vh;
  background-color: ${({ theme, color }) => theme[color]};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  margin-top: 30px;
  width: 80px;
  height: 80px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const StyledBottomIcon = styled.div`
  margin-bottom: 30px;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper color={pageType}>
    <StyledLogo as={NavLink} to="/" />
    <div>
      <ButtonIcon activeclass="active" as={NavLink} to="/notes" icon={penIcon} />
      <ButtonIcon activeclass="active" as={NavLink} to="/twitters" icon={twitterIcon} />
      <ButtonIcon activeclass="active" as={NavLink} to="/articles" icon={bulbIcon} />
    </div>
    <StyledBottomIcon>
      <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
    </StyledBottomIcon>
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
