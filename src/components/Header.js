import PropTypes from 'prop-types';
const Header = ({ title }) => {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

Header.defaultProps = {
    title: "Expense Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
