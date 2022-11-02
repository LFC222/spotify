import React from 'react'
import 
{
  IconArea,
  OptionArea,
} from './styles'

function SidebarOpion({ title, Icon}) {
  return (
    <OptionArea>
      {
        Icon && <IconArea><Icon /></IconArea>
      }
      {
        Icon ? <h4>{title}</h4> : <p>{title}</p>
      }
    </OptionArea>
  )
}

export default SidebarOpion