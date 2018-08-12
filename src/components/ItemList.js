import React, { Component } from 'react'
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {

// PRE-REDUX FETCH API CALL //

    // fetchData(url) {
    //   this.setState({isLoading: true});
    //
    //   fetch(url)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw Error(response.statusText);
    //       }
    //       this.setState({isLoading: false})
    //
    //       return response;
    //     })
    //     .then((response) => response.json())
    //     .then((items) => this.setState({items})) //ES6 property value shorthand for {items: items}
    //     .catch(() => this.setState({hasErrored: true}));
    // }

    componentDidMount() {

      this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')

      //PRE REDUX FUNCTION CALL//
      // this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render(){
            console.log(this.props);
      if (this.props.hasErrored ){
        return <p>Sorry! There was an error loading the items</p>
      }

      if (this.props.isLoading) { return  <p>Loading...</p>
      }

      return (
        <ul>
          {this.props.items.map((item)=> (
            <li key={item.id}>
              {item.label}
            </li>
          ))}
        </ul>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(itemsFetchData(url))
    };
  };

  //Again, I’ve removed the items prefix from the returned object property. Here fetchData is a function that accepts a url parameter and returns dispatching itemsFetchData(url).

  const mapStateToProps = (state) => {
    return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    }
  }

  // And then we need another function to be able to dispatch our itemsFetchData() action creator with a prop.

  export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
