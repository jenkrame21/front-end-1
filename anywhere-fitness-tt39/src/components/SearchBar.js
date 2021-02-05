import React, { useState} from 'react'
import ClassSimple from './ClassSimple';

export default function SearchBar(props) {
  const [search, setSearch] = useState('')
  // eslint-disable-next-line
  const [classes, setClasses] = useState(props.classes || [])
  const [dropDown, setDropDown] = useState('name')
  props.setUseSearch(search) 
  // useEffect(
  //   (evt) => {
  //     axios
  //       .get('https://anywhere-fitness-tt42.herokuapp.com/api/classes', {
  //         headers: {
  //           authorization:
  //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RVc2VyIiwiaWF0IjoxNjEyMzc0MTMxLCJleHAiOjE2MTU5NzQxMzF9.QVLlWbhsCBgaU-Ba2TgW-T9McPNTsWpdodhI2OwiPIc',
  //         },
  //       })
  //       .then((res) => {
  //         setClasses(res.data)
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //         debugger
  //       })
  //   },
  //   [search]
  // )

  const onChangeSearch = (evt) => {
    setSearch(evt.target.value)
  }

  const onChangeDrop = (evt) => {
    setDropDown(evt.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChangeSearch}
        value={search}
        className='search-bar'
      />
      <select name="criteria" onChange={onChangeDrop} value={dropDown} className='drop-down'>
        <option value="name">Name</option>
        <option value="type">Type</option>
        <option value="start_time">Start Time</option>
        <option value="date">Date</option>
        <option value="duration">Duration</option>
        <option value="intensity_level">Intensity Level</option>
        <option value="location">Location</option>
        <option value="attendees">Attendees</option>
        <option value="max_size">Max Size</option>
      </select>
      {classes
      // eslint-disable-next-line
        .filter((cla) => {
          if (search === '') {
            return null
          } else if (
            cla[`${dropDown}`].toString().toLowerCase().includes(search.toString().toLowerCase())
          ) {
            return cla
          }
        })
        .map((cla) => {
          // Should be hooked up to other
          return (
            <ClassSimple item={cla} key={cla.class_id}/>
          )
        })}
    </div>
  )
}
