import React, { useEffect, useState } from 'react'
import { getClasses } from '../actions/index'
import { connect } from 'react-redux'
import ClassSimple from './ClassSimple'
import SearchBar from './SearchBar'

const ClassesList = (props) => {
  const { getClasses } = props
  const [useSearch, setUseSearch] = useState(false)

  useEffect(() => {
    getClasses()
  }, [getClasses])

  if (props.error) {
    return <h2>{props.error}</h2>
  }

  if (props.isLoading) {
    return <h2>Loading Classes...</h2>
  }

  return (
    <div>
      <h1 className='class-list-head'>Available Classes</h1>
      <SearchBar classes={props.classes} setUseSearch={setUseSearch} />
      { !useSearch && 
        (<div className="classes-list">
          {props.classes.map((item) => {
            return <ClassSimple item={item} key={item.class_id} />
          })}
        </div>)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    classes: state.classes.classes,
    isLoading: state.classes.isLoading,
    error: state.classes.loadingError,
  }
}

export default connect(mapStateToProps, { getClasses })(ClassesList)
