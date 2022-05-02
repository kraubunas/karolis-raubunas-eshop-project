/* eslint-disable @typescript-eslint/no-namespace */
import axios from 'axios';
import Credentials from '../../types/credentials';
import TempUser from '../../types/temporary-user';
import User from '../../types/user';

namespace AuthService {
  export const login = async ({ email, password }: Credentials): Promise<User> => {
    const { data: tempUsers } = await axios.get<TempUser[]>(`http://localhost:3000/users?email=${email}`);

    if (tempUsers.length === 0) {
      throw new Error('user email is incorect');
    }

    const [tempUser] = tempUsers;

    if (tempUser.password !== password) {
      throw new Error('password is incorect');
    }

    return {
      id: tempUser.id,
      email: tempUser.email,
    };
  };
}

export default AuthService;
