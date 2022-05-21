import { useMutation } from '@apollo/client';
import { useState } from 'react';

import { CHANGE_PASSWORD } from '../../GraphQL/User/User.mutations';
import { GET_ALL_USERS } from '../../GraphQL/User/User.queries';


export function ChangePassword(): JSX.Element {
  const [id, setId] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const [changePassword, { error }] = useMutation(CHANGE_PASSWORD, {
    refetchQueries: [GET_ALL_USERS],
  });

  function updatePassword() {
    changePassword({
      variables: { id, currentPassword, newPassword }
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="current password"
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="new password"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={updatePassword}>Change Password</button>

      {error && <div style={{ color: 'red' }}>{`${error}`}</div>}
    </div>
  );
}
