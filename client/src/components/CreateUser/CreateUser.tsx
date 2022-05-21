import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CREATE_USER } from '../../GraphQL/User/User.mutations';

export function CreateUser(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [createUser, { error }] = useMutation(CREATE_USER, {
    refetchQueries: []
  });

  function addUser() {
    createUser({
      variables: { name, email, password },
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={addUser}>Create User</button>

      {error && <div style={{ color: 'red' }}>{`${error}`}</div>}
    </div>
  );
}
