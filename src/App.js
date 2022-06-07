import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dotenv from "react-dotenv";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Header from './components/Header/Header.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import ForecastWeek from './components/ForecastWeek/ForecastWeek.jsx';
import Footer from './components/Footer/Footer.jsx';
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: 'New York City',
      country: '',
      temperature: '',
      feelsLike: '',
      temperatureHigh: '',
      temperatureLow: '',
      humidity: '',
      description: '',
      icon: '',
      wind: '',
      date: new Date(),
      coordinates: ''
    }
    this.searchCity = this.searchCity.bind(this);
  }
  searchCity() {
    console.log('API KEY: ', env.REACT_APP_API_KEY)
    // console.log('Hello world');
    // let apiUrl = `${env.API_URL}q=${this.state.city}&units=metric&appid=${env.API_KEY}`;
    // axios.get(apiUrl)
    //   .then(response => {
    //     console.log(response.data);
    //   })
  }

  componentDidMount() {
    this.searchCity();
  }
  render() {
    return (
      <>
        <Card className="wrapper">
          <SearchForm />
          <Card.Title>
            <Header />
          </Card.Title>
          <Card.Body>
            <CurrentWeather />
            <ForecastWeek />
          </Card.Body>
        </Card>
        <Footer />
      </>
    );
  }
}

export default hot(App);