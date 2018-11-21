import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_Bar';
import VideoList from './components/video_list';
import VideoDetail from './components/videoDetail';

const Api_key = 'AIzaSyDO9Of_cq5eXA7Dqw0krMXvC530OBK4yoI';


YTSearch({key: Api_key, term: ' charger'}, function(data) {
  console.log(data);
});

// YTSearch({key: Api_key, term: 'surfboards'}, function(data){
//   console.log(data);
// });

// Create a new component. Should produce some HTM.
// const Ap = () => {
//   return <div>Hola!</div>;
// }

//const App = () => {
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('ip man');
  }
videoSearch(term){
  YTSearch({key: Api_key, term: term}, (videos) => {
    this.setState({
      videos:videos,
      selectedVideo: videos[0]
     });
    // this.setState({ videos: videos});
    //console.log(videos);
  });
}
  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


    return (

    <div>

    <SearchBar onSearchTermChange={videoSearch} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
    videos = {this.state.videos} />
    </div>
   );
  }
}


// TAke this component's generated HTL and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
