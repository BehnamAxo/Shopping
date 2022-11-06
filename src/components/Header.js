import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { showItemForm } from '../redux/actions';

const Header = ({ title, showForm, onClick }) => {
  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button 
        color={showForm ? 'red' : 'green'}
        text={showForm ? 'Hide' : 'Show'}
        onClick={onClick}
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

const mapStateToProps = ({ currentState }) => {
  return {
    showForm: currentState.showForm
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(showItemForm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
