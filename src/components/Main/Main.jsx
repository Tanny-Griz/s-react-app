import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SimpleInput from '../SimpleInput/SimpleInput';
import Dnd from '../Dnd/Dnd';

const Main = () => {
    return (
      <main>
        <Switch>
            <Route exact path='/' component={SimpleInput}/>
            <Route path='/dnd' component={Dnd}/>
        </Switch>
      </main>  
    )
}
  
export default Main;