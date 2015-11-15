var React = require('react');
var ReactDOM = require('react-dom');

// routing tools
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation; //mixin
var History = ReactRouter.History; //mixin
var createBrowserHistory = require('history/lib/createBrowserHistory');

// helpers for auto-generating dummy text in the form input
var h = require('./helpers');

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
  mixins : [History],
  goToStore : function(event) {
    event.preventDefault();
    // check to confirm that our events are listening
    // console.log('it works!!');

    // get data from the input field then check it
    var storeId = this.refs.storeId.value;
    console.log(storeId);
    // then transition from <StorePicker/> to <App/>
    this.history.pushState(null, '/store/' + storeId);

  },
  render : function() {
    var prompt = 'Please enter a store';
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* This is a comment in jsx,
            it only works when _inside_ the single
            element of jsx that gets rendered.
        */}
        <h2>{prompt}</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
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
