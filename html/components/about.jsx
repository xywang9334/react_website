var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title"> About </h1>
      <p> This is a weather App </p>
      <p> Here are some tools</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> --JavaScript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">Weather Map</a> --Search for weather data
        </li>
      </ul>
    </div>
  )
};
module.exports = About;
