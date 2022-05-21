import './App.css';

import { CreateUser } from '..';
import { UserList } from '../UserList/UserList';


export function App() {
  return (
    <div className="App">
      <CreateUser />
      <UserList />
    </div>
  );
}
