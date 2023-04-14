import styled from 'styled-components';

export const NavItemLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: var(--size-md);
  gap: var(--size-md);
  color: var(--color-03);
  cursor: pointer;

  &:hover {
    background-color: var(--color-02);
  }
`;

export const NavItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size-xl);
  height: var(--size-xl); 
`;