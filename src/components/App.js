import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import './VideoItem.css'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    const terms = [
      'malaysia new year 2020',
      'malaysia latest trends',
      'CNY 2020 malaysia',
      'KL fitness training classes'
    ]
    this.onTermSubmit(terms[Math.floor(Math.random()*terms.length)])
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="page-title">
      <h1>TOP 5: Featured Videos on Youtube</h1>
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit}  />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App
