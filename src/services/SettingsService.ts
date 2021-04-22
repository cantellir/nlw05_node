import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsService {
    chat: boolean;
    username: string;
}

class SettingsService {

    async create({ chat, username }: ISettingsService) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const settings = settingsRepository.create({
            chat,
            username
        });

        await settingsRepository.save(settings);

        return settings;
    }

}

export { SettingsService }