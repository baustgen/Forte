import React from "react";
import ArtistsIndexItem from "./artists_index_item";


class ArtistsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestArtists(this.props.match.params.letter)
    }

    render() {

        let artistArray = Object.values(this.props.artists);
        let artistItems = artistArray.map((artist) => {
            return (
                <ArtistsIndexItem 
                    artist={artist} 
                    key={artist.id} 
                />
            )
        })

        return (
            <div className="artists-index-container">
                <ul className="artists-index">
                    {artistItems}
                </ul>
            </div>
        )
    }
}

export default ArtistsIndex;