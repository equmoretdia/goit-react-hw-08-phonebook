import { Hourglass } from 'react-loader-spinner';
import PropTypes from 'prop-types';

import { LargeLoader, MediumLoader, SmallLoader } from './LoaderStyles';

const Loader = ({ height, width, colors, size }) => {
  const hourGlass = (
    <Hourglass
      visible={true}
      height={height}
      width={width}
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={colors}
    />
  );

  return (
    <>
      {size === 'l' ? (
        <LargeLoader>{hourGlass}</LargeLoader>
      ) : size === 'm' ? (
        <MediumLoader>{hourGlass}</MediumLoader>
      ) : (
        <SmallLoader>{hourGlass}</SmallLoader>
      )}
    </>
  );
};

Loader.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  size: PropTypes.string.isRequired,
};

export default Loader;

// module.css:
// <div className={`${css[size]}`}>
//   <Hourglass */}
//     visible={true}
//     height={height}
//     width={width}
//     // height="60"
//     // width="60"
//     ariaLabel="hourglass-loading"
//     wrapperStyle={{}}
//     wrapperClass=""
//     colors={colors}
//     // colors={['#383848']}
//   />
// </div>
