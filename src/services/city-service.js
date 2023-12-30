const { CityRepository } = require('../repository/index');


class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity (data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async deleteCity (cityId) {
        try {
            await this.cityRepository.deleteCity(cityId);
            return true;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async updateCity (cityId, data) {
        try {
            const response = await this.cityRepository.updateCity(cityId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getCity (cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }

    async getAllCities () {
        try {
            const city = await this.cityRepository.getAllCities();
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = CityService;