import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import React from 'react'
import 
{
  SongInfo,
  Repeat,
  Shuffle,
  SkipNext,
  PlayCircle,
  SkipPrevious,
  FooterLeft,
  AlbumLogo,
  FooterArea,
  FooterCenter,
  FooterRight,
} from './styles'

function Footer() {
  return (
    <FooterArea>
      <FooterLeft>
        <AlbumLogo 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WSBkknH3ZN3MxBgImW2hw4SP5PuFiPA8sg&usqp=CAU' 
          alt='usher'
        />
        <SongInfo>
          <h4>Yeah!</h4>
          <p>Usher</p>
        </SongInfo>
      </FooterLeft>

      <FooterCenter>
          <Shuffle />
          <SkipPrevious />
          <PlayCircle 
            fontSize='large'
          />
          <SkipNext />
          <Repeat />
      </FooterCenter>

      <FooterRight>
        <Grid container space={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </FooterRight>
    </FooterArea>
  )
}

export default Footer