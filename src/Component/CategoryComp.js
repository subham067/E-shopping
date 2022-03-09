import React, { useContext, useRef } from 'react'
import NoteContext from '../contextApi/NoteContext'

function CategoryComp({ a }) {
  const Context = useContext(NoteContext)
  const { ChangeItem } = Context;
  const inputEl = useRef(null);
  function search_btn() {
    ChangeItem(a)
  }
  return (
    <a onClick={search_btn} ref={inputEl}>{a}</a>
  )
}

export default CategoryComp