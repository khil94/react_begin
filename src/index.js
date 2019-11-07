import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBS1y7bGZpCL_M51W4KUdk6N-NSlPkqvXE";



// components which create some html
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos : [],
            selectedVideo: null 
        };

        YSearch({key:API_KEY, term:'tekken'}, (videos) => {
            this.setState({ 
                videos : videos,
                selectedVideo : videos[0]
            }); 
        });
        
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's generated HTML and put in on the dom
ReactDom.render(<App/>, document.querySelector('.container'));
