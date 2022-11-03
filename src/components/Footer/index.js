import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import React, {useState, useEffect} from 'react'
import 
{
  SongInfo,
  Repeat,
  Shuffle,
  PauseCircle,
  SkipNext,
  PlayCircle,
  SkipPrevious,
  FooterLeft,
  AlbumLogo,
  FooterArea,
  FooterCenter,
  FooterRight,
} from './styles'
import {useDataLayerValue} from '../../DataLayer';

function Footer({spotify}) {
  const [{token, item, playing}, dispatch] = useDataLayerValue();

/*   useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);*/

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <FooterArea>
      <FooterLeft>
        <AlbumLogo 
          src= {item?.album.images[0].url} 
          alt= {item?.name}
        />
        {
          item ? (
            <SongInfo>
              <h4>{item.name}</h4>
              <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
            </SongInfo>
          ) : (
            <SongInfo>
              <h4>No song is playing</h4>
              <p>...</p>
            </SongInfo>
          )
        }
      </FooterLeft>

      <FooterCenter>
          <Shuffle />
          <SkipPrevious onClick={skipNext}/>
          {
            playing ? (
              <PauseCircle
              onClick={handlePlayPause}
              fontSize='large'
            />
            ) : (
              <PlayCircle
                onClick={handlePlayPause}
                fontSize ='large'
              />
            )
          }
          <SkipNext onClick={skipPrevious}/>
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