import { Hourglass } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import css from './Loader.module.css';

const Loader = ({ height, width, colors, size }) => {
  return (
    <div className={`${css[size]}`}>
      <Hourglass
        visible={true}
        height={height}
        width={width}
        // height="60"
        // width="60"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={colors}
        // colors={['#383848']}
      />
    </div>
  );
};

Loader.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  size: PropTypes.string.isRequired,
};

export default Loader;
