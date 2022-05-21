import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../GraphQL/User/User.queries';
import { IUser } from '../../interface/IUser';

export function UserList() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{`${error}`}</h2>

  const users: IUser[] = data.getAllUsers;

  return (
    <>
      {
        users.length
          ?
          <ul>
            {
              users.map(({ id, name, email, password }) => (
                <li key={id}>
                  <div><b>id:</b> {id}</div>
                  <div><b>name:</b> {name}</div>
                  <div><b>email:</b> {email}</div>
                  <div><b>password:</b> {password}</div>
                </li>
              ))
            }
          </ul>
          :
          <h3>List is empty!</h3>
      }
    </>
  );
}
