var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.refs.search.value = "";
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather APP</li>
            <li>
              <IndexLink to="/" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeStyle={{fontWeight: 'bold'}} activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/example" activeStyle={{fontWeight: 'bold'}} activeClassName="active">Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search for Weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;