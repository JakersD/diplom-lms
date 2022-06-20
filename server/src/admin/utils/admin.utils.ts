import { Model } from 'mongoose';
import { User } from 'src/users/interfaces/users.interface';

export const getUser = async (userCred: User, model: Model<User>) => {
    const { username } = userCred;

    return await model
        .findOne({ username }, { username: 0, password: 0 })
        .populate({ path: 'facultyId', model: 'Faculty' });
};
