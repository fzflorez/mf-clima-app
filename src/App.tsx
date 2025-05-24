import styles from './App.module.css';
import Form from './components/Form/Form';
import Message from './components/Message/Message';
import Spinner from './components/Spinner/Spinner';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import useWeather from './hooks/useWeather';

function App() {
  const { weather, loading, notFound, hasWeather, searchWeather } =
    useWeather();

  return (
    <>
      <div className={styles.backgroundOpacity}></div>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>ClimaApp</h1>
        </header>

        <main className={styles.main}>
          <Form searchWeather={searchWeather} />
          {hasWeather && <WeatherDetails weather={weather} />}
          {loading && <Spinner />}
          {notFound && <Message>No se encontraron resultados</Message>}
        </main>
      </div>
    </>
  );
}

export default App;
