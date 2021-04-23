import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {
    private usersRepository: Repository<User>;

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        // check if user exists
        const userExists = await this.findByEmail(email);

        //if user not exists save in db
        if (userExists) {
            return userExists;
        }

        //if exists return user
        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
    }

    async findByEmail(email: string) {
        return await this.usersRepository.findOne({
            email
        });
    }
}

export { UsersService }