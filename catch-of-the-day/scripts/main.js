var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

/*
  App
  <App/> component
*/
var App = React.createClass({

  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }

});

/*
  Header
  <Header/> component
*/
var Header = React.createClass({

  render : function() {
    console.log(this.props);
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }

});

/*
  Order
  <Order/> component
*/
var Order = React.createClass({

  render : function() {
    return (
      <p>Order</p>
    )
  }

});

/*
  Inventory
  <Inventory/> component
*/
var Inventory = React.createClass({

  render : function() {
    return (
      <p>Inventory</p>
    )
  }

});

/*
  StorePicker
  <StorePicker/> component
*/
var StorePicker = React.createClass({

  render : function() {
    var name = 'http://zelip.me';
    return (
      <form className="store-selector">
        {/* This is a comment in jsx,
            it only works when _inside_ the single
            element of jsx that gets rendered.
        */}
        <h2>Please enter a store <a href="http://zelip.me">{name}</a></h2>
        <input type="text" ref="storeId" />
        <input type="Submit" />
      </form>
    )
  }
});

/*
  Not Found
*/
var NotFound = React.createClass({

  render : function() {
    return (
      <h1>Not Found!</h1>
    )
  }

});

/*
  Routes
*/
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)



ReactDOM.render(routes, document.querySelector('#main'));
