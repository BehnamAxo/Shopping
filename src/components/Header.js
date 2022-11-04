import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button 
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Hide' : 'Show'}
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
