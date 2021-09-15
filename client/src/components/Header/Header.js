import { Link } from 'react-router-dom';

import { $Header, $Logo } from './styles';

const Header = () => {
  return (
    <$Header>
      <$Logo>
        <Link to="/">Node React Starter</Link>
      </$Logo>
    </$Header>
  );
};

export default Header;
