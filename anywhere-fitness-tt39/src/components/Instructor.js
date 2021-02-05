import React from 'react';
import { Route } from 'react-router-dom';
import AddClassForm from './AddClassForm';
import ClassesList from './ClassesList';
import ClassDetails from './ClassDetails';
import UpdateClassForm from './UpdateClassForm';

const Instructor = () => {
  return (
    <div>
      <Route exact path='/instructor'>
        <AddClassForm />
      </Route>
      <Route exact path='/instructor'>
        <ClassesList />
      </Route>
      <Route path='/instructor/class/:classid'>
        <ClassDetails/>
      </Route>
      <Route path='/instructor/update/:classid'>
        <UpdateClassForm/>
      </Route>
    </div>
  )
}

export default Instructor;