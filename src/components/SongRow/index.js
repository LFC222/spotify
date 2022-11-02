import React from 'react'
import 
{
    SongInfo,
    SongAlbum,
    RowContainer,
} from './styles'

function SongRow({track}) {
  return (
    <RowContainer>
        <SongAlbum src={track.album.images[0].url} alt='' />
        <SongInfo>
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artist) => artist.name).join()} -{" "}
                {track.album.name}
            </p>
        </SongInfo>
    </RowContainer>
  )
}

export default SongRow