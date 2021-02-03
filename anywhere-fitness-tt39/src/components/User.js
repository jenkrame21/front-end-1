import React from 'react';
import ClassesList from './ClassesList';
import { Route } from 'react-router-dom';
import UserSavedClasses from './UserSavedClasses';

const User = () => {
  return (
    <div>
        <Route path='/user'>
          <ClassesList />
        </Route>
        <Route path='/user'>
          <UserSavedClasses />
        </Route>
    </div>
  )
}

export default User;