import React from 'react'
import SidebarOpion from '../SidebarOption'
import 
{
    SidebarContainer,
    SidebarTitle,
    LogoSidebar
} from './styles'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../../DataLayer'

function Sidebar() {
    const [{playlists},dispatch] = useDataLayerValue();
  return (
    <SidebarContainer>
       <LogoSidebar 
            src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' 
            alt=''
        />
        <SidebarOpion Icon={HomeIcon} title="Home"/>
        <SidebarOpion Icon={SearchIcon} title="Search"/>
        <SidebarOpion Icon={LibraryMusicIcon} title="Your library"/>
        <br/>
        <SidebarTitle>PLAYLISTS</SidebarTitle>
        <hr/>

        {playlists?.items?.map((playlist) => (
        <SidebarOpion option={playlist.name} />
      ))}
    </SidebarContainer>
  )
}

export default Sidebar