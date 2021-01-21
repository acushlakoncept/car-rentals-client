import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import CarItem from '../components/CarItem';
import { fetchCars } from '../redux/actions';

function CarContainer({ carData, getCars }) {
  useEffect(() => {
    getCars();
  }, []);
  const token = useSelector(state => state.user.token);

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
        { carData.cars.map(carInfo => (
          <CarItem
            key={carInfo.id}
            car={carInfo}
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
