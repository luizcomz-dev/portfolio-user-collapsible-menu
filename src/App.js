import { BiGroup, BiHelpCircle, BiUser } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineLockPerson } from 'react-icons/md';
import styled from 'styled-components';
import profileImage from './assets/images/adele_profile.jpeg';

import UserDropdown from './components/UserDropdown';
import './index.css';

const user = {
  name: 'Adele Roberts',
  email: 'adroberts@fakemail.com',
  image: profileImage
};

const menuItems = [
  { icon: BiUser, text: 'Perfil' },
  { icon: BiGroup, text: 'Comunidades' },
  { },
  { icon: MdOutlineLockPerson, text: 'Privacidade'},
  { icon: BsMoon, text: 'Acessibilidade' },
  { icon: CiSettings, text: 'Configurações' },
  { },
  { icon: BiHelpCircle, text: 'Ajuda e suporte '}
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;

function App() {
  return (
    <Container>
      <UserDropdown user={user} menuItems={menuItems} />
    </Container>
  );
}

export default App;
