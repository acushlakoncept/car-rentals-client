import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import CarItem from '../components/CarItem';
import { fetchCars, addFavourites } from '../redux/actions';

function CarContainer({ carData, getCars }) {
  useEffect(() => {
    getCars();
  }, []);
  const token = useSelector(state => state.user.token);
  const favState = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  const handleFavourite = id => {
    const carInfo = {
      car_id: id,
    };
    dispatch(addFavourites(carInfo));
    alert(favState.message);
  };

  // eslint-disable-next-line no-nested-ternary
  return carData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="orange" />
    </h2>
  ) : token === undefined || token === 'undefined' ? (
    <h2 className="text-center pt-5 white">
      { carData.error }
      <Redirect to="/login" />
    </h2>
  ) : (
    <Container className="bg-dark">
      <div className="mt-5 d-flex flex-wrap justify-content-center">
        <h2 className="text-center pt-5 white">{ carData.error }</h2>
        { carData.cars.map(carInfo => (
          <CarItem
            key={carInfo.id}
            car={carInfo}
            handleFavourite={() => handleFavourite(carInfo.id)}
          />
        )) }
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  carData: state.cars,
});

const mapDispatchToProps = dispatch => ({
  getCars: () => dispatch(fetchCars()),
});

CarContainer.propTypes = {
  carData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    cars: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
    token: PropTypes.string,
  }),
  getCars: PropTypes.func.isRequired,
};

CarContainer.defaultProps = {
  carData: {
    cars: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
