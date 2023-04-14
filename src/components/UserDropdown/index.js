import styled from 'styled-components';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';

const DropdownWrap = styled.div`
  background-color: var(--color-01);
  border: var(--size-minimum) solid var(--color-02);
  border-radius: var(--size-xs);
  box-shadow: 0px var(-size-md) var(--size-xl) -4px rgba(var(--color-03) 0.08), 0px var(--size-xxs) ar(--size-xxs) -2px rgba(var(--color-03) 0.03);
`;

export default function UserDropdown({ user, menuItems }) {

  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <DropdownWrap>
      <Header
        image={user.image}
        name={user.name}
        email={user.email}
        handleClick={() => setCollapsed(!isCollapsed)}
        isCollapsed={isCollapsed}
      />
      <Menu isCollapsed={isCollapsed} menuItems={menuItems}>

      </Menu>
      <Footer isCollapsed={isCollapsed} />
    </DropdownWrap>
  );
}