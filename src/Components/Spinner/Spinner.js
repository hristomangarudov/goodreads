import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <Spinner variant='info' animation="border" role="status"></Spinner>
  );
}

export default LoadingSpinner;