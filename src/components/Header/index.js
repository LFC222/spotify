import React from 'react'
import 
{
    HeaderLeft,
    HeaderRight,
    HeaderContainer,
} from './styles'
import {useDataLayerValue} from '../../DataLayer'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'

function Header({ spotify }) {
    const [ { user }, dispatch ] = useDataLayerValue();
  return (
    <HeaderContainer>
        <HeaderLeft>
            <SearchIcon />
            <input 
                placeholder='Search for Artists, Songs, or Podcasts'
                type='text'
            />
        </HeaderLeft>

        <HeaderRight>
            <Avatar alt={user?.display_name} src={user?.images[0].url}/>
            <h4>{user?.display_name}</h4>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header