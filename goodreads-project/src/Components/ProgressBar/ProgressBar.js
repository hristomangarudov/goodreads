import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarWithPercent() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} variant="info"/>;
}

export default ProgressBarWithPercent;