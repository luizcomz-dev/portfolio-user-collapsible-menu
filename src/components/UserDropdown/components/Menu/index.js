import { animated, useSpring } from 'react-spring';
import useMeasure from 'react-use-measure';
import styled from 'styled-components';
import Divider from '../Divider';

import { NavItemLink, NavItemIcon } from '../NavItemLink'

const CollapsibleMenu = styled(animated.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column; 
`;

const Menu = ({ isCollapsed, menuItems }) => {
  const [ref, bounds] = useMeasure();

  const navContentAnimated = useSpring({
    height: isCollapsed ? 0 : bounds.height,
  });

  return (
    <CollapsibleMenu style={navContentAnimated}>
      <nav ref={ref}>
        <ul>
          {
            menuItems.map((item, index) => (
              item.text && item.icon ? (
                <li key={index}>
                <NavItemLink href="#">
                    <NavItemIcon>
                      <item.icon />
                    </NavItemIcon>
                    <span>{item.text}</span>
                  </NavItemLink>
                </li>
              ) : (
                <Divider key={index}/>
              )
            ))
          }
        </ul>
      </nav>
    </CollapsibleMenu>
  );
};

export default Menu;