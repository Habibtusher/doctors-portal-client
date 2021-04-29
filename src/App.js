import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPatients from './Components/AllPatients/Allpatients/Allpatients';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
    <h2>{loggedInUser.name}</h2>
    <Router>
      <Switch>
      <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
      
        <Route path="/allPatients">
          <AllPatients></AllPatients>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/doctor/add">
          <AddDoctor></AddDoctor>
        </Route>
        <Route exact-path="/">
          <Home></Home>
        </Route>
      
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
