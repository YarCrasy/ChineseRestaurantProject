import PropTypes from 'prop-types';
import "./DropDown.css";

function DropDown(props) {
    let dropdownContents = props.contents;

    return (
        <div className="dropdown">
            <button className="dropdown-btn">{props.buttonText}</button>
            <div className="dropdown-content">
                {dropdownContents.map((content) => (
                    content
                ))}
            </div>
        </div>
    );
}

DropDown.propTypes = {
    contents: PropTypes.array.isRequired,
    buttonText: PropTypes.string.isRequired
};

export default DropDown;