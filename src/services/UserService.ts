import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"

class UserService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

        // check if user exists
        const userExists = await usersRepository.findOne({
            email
        });

        //if user not exists save in db
        if (userExists) {
            return userExists;
        }

        //if exists return user
        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        return user;
    }
}

export { UserService }