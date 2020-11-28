import React,{Fragment} from 'react';
import { Switch ,Route} from "react-router-dom";
import AllEmployee from './Component/EmployeeComponent/AllEmployee';
import CreateEmployee from './Component/EmployeeComponent/CreateEmployee';
import DeleteEmployee from './Component/EmployeeComponent/DeleteEmployee';
import EditEmployee from './Component/EmployeeComponent/EditEmployee';
import Employee from './Component/EmployeeComponent/Employee';
import Navbar from './Component/HeaderComponent/Navbar';

const App = () => {
    return (
       <Fragment>
           <header>
           < Navbar/>
           <AllEmployee/>
           </header>
           <main className="container my-2">
               <Switch>
                   <Route path="/all-emp" exact component ={AllEmployee} />
                   <Route path="/create-emp" exact component ={CreateEmployee} />
                   <Route path="/emp-details/:id" exact component ={Employee} />
                   <Route path="/edit-emp/:id" exact component ={EditEmployee} />
                   <Route path="/delete-emp/:id" exact component ={DeleteEmployee}/>
               </Switch>
           </main>
       </Fragment>
    )
}

export default App;
