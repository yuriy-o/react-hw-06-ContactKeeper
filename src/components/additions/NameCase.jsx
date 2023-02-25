import PropTypes from 'prop-types';

export const NameCase = str => {
  if (str === undefined) {
    return;
  }

  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
};

NameCase.propTypes = {
  str: PropTypes.string,
};
