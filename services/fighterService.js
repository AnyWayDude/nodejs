const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    search(search) {
        const result = FighterRepository.getOne(search);
        if(!result) {
            return null;
        }
        return result;
    }

    getCollection() {
        const result = FighterRepository.getAll();
        if(!result) {
            return null;
        }
        return result;
    }

    getById(id) {
        const result = FighterRepository.getOne(fighter => fighter.id === id);
        if(!result) {
            return null;
        }
        return result;
    }

    create(fighter) {
        const result = FighterRepository.create(fighter)
        if(!result) {
            return null;
        }
        return result;
    }

    update(id, fighterToUpdate) {
        const result = FighterRepository.update(id, fighterToUpdate)
        if(!result) {
            return null;
        }
        return result;
    }

    delete(id) {
        const result = FighterRepository.delete(id)
        if(!result) {
            return null;
        }
        return result;
    }
}

module.exports = new FighterService();