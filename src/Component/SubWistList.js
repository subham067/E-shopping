import React,{useContext} from 'react'
import NoteContext from '../contextApi/NoteContext'
import WistListItem from './WistListItem';

function SubWistList({a}) {
    const Context = useContext(NoteContext)
    const { AllUserData, pData, logedIn,changeTotal } = Context;
  return (
    <>
    {pData.map((d) => {
        if (d.id == a) {
            return (
                <WistListItem d={d} />
            )
        }
    })}
</>
  )
}

export default SubWistList