import { formatTemperature } from '../../helpers';
import type { Weather } from '../../hooks/useWeather';
import styles from './WeatherDetails.module.css';

type WeatherDetailsProps = {
  weather: Weather;
};

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  return (
    <div className={styles.container}>
      <h2>
        Clima de: <span>{weather.name}</span>{' '}
      </h2>
      <p>{formatTemperature(weather.main.temp)}&deg;C</p>
      <div className={styles.temperatures}>
        <p>
          MIN: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span>{' '}
        </p>
        <p>
          MAX: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span>{' '}
        </p>
      </div>
    </div>
  );
}
