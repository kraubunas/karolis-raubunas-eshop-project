/* eslint-disable @typescript-eslint/no-namespace */
import axios from 'axios';
import Credentials from '../../types/credentials';
import TempUser from '../../types/temporary-user';
import User from '../../types/user';

export type AuthPromise = (credential: Credentials) => Promise<User>;

namespace AuthService {
  export const login: AuthPromise = async ({ email, password }: Credentials): Promise<User> => {
    const { data: tempUsers } = await axios.get<TempUser[]>(`http://localhost:8000/users?email=${email}`);

    if (tempUsers.length === 0) {
      throw new Error('User email is incorect');
    }

    const [tempUser] = tempUsers;

    if (tempUser.password !== password) {
      throw new Error('Password is incorect');
    }

    return {
      id: tempUser.id,
      email: tempUser.email,
    };
  };

  export const register: AuthPromise = async ({ email, password }: Credentials): Promise<User> => {
    const { data: tempUsers } = await axios.get<TempUser[]>('http://localhost:8000/users');

    const userExists = tempUsers.map((existingUser) => existingUser.email).includes(email);

    if (userExists) {
      throw new Error('This email is taken. Choose another email');
    }

    const { data: createdPermanentUser } = await axios.post('http://localhost:8000/users', { email, password });

    const createdUser = {
      id: createdPermanentUser.id,
      email: createdPermanentUser.email,
    };

    return createdUser;
  };

}

export default AuthService;
