import './App.css';

import { CreateUser } from '..';
import { UserList } from '../UserList/UserList';
import { ChangePassword } from '../ChangePassword/ChangePassword';


export function App() {
  return (
    <div className="App">
      <CreateUser />
      <ChangePassword />
      <UserList />
    </div>
  );
}
