import { MdLogout } from 'react-icons/md';
import styled from 'styled-components';
import { NavItemIcon, NavItemLink } from '../NavItemLink';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-md);
  border-top: ${props => props.isCollapsed ? 'none' : 'var(--size-minimum) solid var(--color-02)'};
`;

const StyledFooterLink = { borderRadius: '0 0 var(--size-xs) var(--size-xs)', width: '100%'};

const Footer = ({ isCollapsed }) => {
  return (
    <StyledFooter isCollapsed={isCollapsed}>
      <NavItemLink style={StyledFooterLink}>
        <NavItemIcon>
          <MdLogout size={20} />
        </NavItemIcon>
        <span>Sair</span>
      </NavItemLink>
    </StyledFooter>
  );
};

export default Footer;