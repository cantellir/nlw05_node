import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(request: Request, response: Response) {
        const { chat, username } = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({ chat, username });

            return response.json(settings);
        } catch (error) {
            return response.status(400).json({
                "message": error.message,
            })

        }
    }

    async findByUserName(request: Request, response: Response) {
        const { username } = request.params;

        const settingsService = new SettingsService;

        const settings = await settingsService.findByUsername(username);

        return response.json(settings);
    }

}

export { SettingsController }