import React from "react";

class TrackLyrics extends React.Component {


    render () {


        const { track, annotations, handleMouseUp, handleMouseDown, selectAnnotation } = this.props;

        let annotatedLyrics = [];
        let prevIndex = 0;
        let key = 0

        for (let i = 0; i < annotations.length; i++) {
            const annotation = annotations[i];
            const lyric = track.lyrics.slice(annotation.startIndex, annotation.endIndex)
            let before = track.lyrics.slice(prevIndex, annotation.startIndex);

        

            annotatedLyrics.push(
                <span key={key++} data-indexoffset={prevIndex}>
                    {before}
                </span>
            );

            annotatedLyrics.push(
                <a key={key++} 
                    data-indexoffset={prevIndex}
                    // onClick={selectAnnotation(annotation.id)}
                    className="lyric-annotated"
                >

                    {lyric}
                </a>
            )

            prevIndex = annotation.endIndex

            if (i === annotations.length - 1) {
                annotatedLyrics.push(
                    <span key={key++} data-indexoffset={prevIndex}>
                        {track.lyrics.slice(prevIndex, track.lyrics.length)}
                    </span>
                )
            }
            
        }
        if (annotatedLyrics.length) {
            return (
    
                <p className="lyrics-text">
                    {annotatedLyrics}
                </p>
            )
        } else {
            return (
                <p className="lyrics-text">
                    {this.props.track.lyrics}
                </p>
            )
        }

    }
}

export default TrackLyrics;