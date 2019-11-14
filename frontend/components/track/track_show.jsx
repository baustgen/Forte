import React from "react";
import { Link } from "react-router-dom";
import TrackLyrics from "./track_lyrics";


class TrackShow extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.requestTrack(this.props.match.params.trackId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.trackId != prevProps.match.params.trackId) {
            this.props.requestTrack(this.props.match.params.trackId)
        }
    }


    render() {
        if (this.props.track === undefined || this.props.artists[this.props.track.artistId] === undefined) return null;


        let modal = (
            <div className="annotation-instructions">
                <p>Click a highlighted lyric to view its annotation</p>
                <p>Highlight lyrics to add an annotation</p>
            </div>
        );
        
        return (
            <div className="track-show">
                <div className="track-info-container">
                    <img className="track-show-img" src={this.props.track.imageUrl}/>
                    <div className="track-info">
                        <p className="track-title">{this.props.track.title}</p>
                        <p className="track-artist">
                            <Link to={`/artists/${this.props.artists[this.props.track.artistId].name[0]}/${this.props.track.artistId}`}>
                                {this.props.artists[this.props.track.artistId].name}
                            </Link>
                        </p>
                        <p className="track-album">{this.props.track.album}</p>
                    </div>
                </div>
                <div className="track-content">
                    <div className="lyrics-container">
                        <h4 className="lyrics-header">{this.props.track.title.toUpperCase() + ' LYRICS'}</h4>
                        {/* <p className="lyrics-text">{this.props.track.lyrics}</p> */}
                        <TrackLyrics 
                            track={this.props.track}
                            annotations={this.props.annotations}
                        />
                    </div>
                    <div className="track-modal">
                        <h4 className="annotations-header">ANNOTATIONS</h4>
                        {modal}
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackShow;