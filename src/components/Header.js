import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAdd ? 'green' : 'red'}
        text={showAdd ? 'Show' : 'Hide'}
        onClick={onAdd}
      />
    </header>
  )
};

Header.defaultProps = {
  title: 'Title was not passed'
};

Header.prototypes = {
  title: PropTypes.string
};

export default Header;
