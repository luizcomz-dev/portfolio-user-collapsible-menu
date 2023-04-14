import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

const Head = styled.div`
  padding: var(--size-md) var(--size-xl);
  border-bottom: var(--size-minimum) solid var(--color-02);
`;

const HeadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size-md);
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: baseline;
`;

const AvatarBadge = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-05);
  margin-left: -10px;
  border: 2px solid var(--color-01);
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
    font-size: var(--size-lg);
    font-weight: var(--weight-medium);
    margin-bottom: var(--size-xxs);
`;

const UserEmail = styled.p`
  font-size: var(--size-sm);
  font-weight: var(--weight-regular);
  color: var(--color-04);
`;

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const ToggleButtonRotateEffect = isCollapsed => ({
  transition: 'transform .5s',
  transform: isCollapsed ? 'rotate(0deg)' : 'rotate(-180deg)',
});

const Header = ({ image, name, email, isCollapsed, handleClick }) => {
  return (
    <Head>
      <HeadContent>
        <AvatarGroup>
          <AvatarImage src={image} />
          <AvatarBadge />
        </AvatarGroup>
        <UserData>
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
        </UserData>
        <HeaderButton>
          <ToggleButton onClick={handleClick}>
            <BsChevronDown style={ToggleButtonRotateEffect(isCollapsed)} />
          </ToggleButton>
        </HeaderButton>
      </HeadContent>
    </Head>
  );
};

export default Header;