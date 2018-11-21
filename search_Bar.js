import React, {Component} from 'react';  // igual a 'React.Component'

// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }


  render() { //Method def in a class
    //return <input onChange = {(eventOB => console.log(eventOB.target.value)} />;
    return (
      <div className="search-bar">
      <input
      value={this.state.term}
      //onChange={eventOB => this.setState({ term: eventOB.target.value})} />
      onChange={event => this.onInputChange(event.target.value)} />

      </div> // THIS IS THE MAGIC THAT INPUTS THE CHARCTERS IN THE SEARCH BAR.
      // Value of the input: {this.state.term}  // Esta linea es la que copia el input y los rprintea.
    );

  }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
  //   onInputChange(eventOB) {
  //   console.log(eventOB.target.value);
  // }

}

export default SearchBar;
