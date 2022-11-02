import React from 'react'
import 
{
  TextInfo,
  BodyInfo,
  BodyArea,
  BodyIcons,
  BodySongs,
  PlayCircleFilled,
} from './styles'
import SongRow from '../SongRow'
import Header from '../Header'
import { useDataLayerValue } from '../../DataLayer'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import FavoriteIcon from '@material-ui/icons/Favorite'

function Body({ spotify }) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <BodyArea>
      <Header spotify={spotify} />

      <BodyInfo>
        <img 
          src={discover_weekly?.images[0].url} 
          alt='discover' 
        />
        <TextInfo>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </TextInfo>
      </BodyInfo>

      <BodySongs>
        <BodyIcons>
          <PlayCircleFilled/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon/>
        </BodyIcons>

        {/* List of songs */}

        {
          discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track} />
          ))
        }
      </BodySongs>
    </BodyArea>
  )
}

export default Body