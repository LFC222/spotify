import React from 'react'
import Sidebar from '../Sidebar'
import Body from '../Body';
import Footer from '../Footer';
import 
{
    PlayerContainer,
    BodyContainer,
} from './styles'


function Player({ spotify }) {
  return (
    <div>
        <PlayerContainer>
            <BodyContainer>
              <Sidebar/>
              <Body spotify={spotify}/>
            </BodyContainer>
               <Footer/>
        </PlayerContainer>  
    </div>
  )
}

export default Player