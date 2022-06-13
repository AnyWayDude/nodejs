const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {

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
            return [];
        }
        return result;
    }

    getById(id) {
        const result = FighterRepository.getOne(fighter => fighter.id === id);
        if(!result) {
            throw Error('Fighter not found');
        }
        return result;
    }

    create(fighter) {
        const result = FighterRepository.create(fighter);
        if(!result) {
            return null;
        }
        return result;
    }

    update(id, fighterToUpdate) {
        this.getById(id)
        const result = FighterRepository.update(id, fighterToUpdate);
    
        return result;
    }

    delete(id) {
        this.getById(id);
        FighterRepository.delete(id);
        
        return {
            status: 'ok'
        }
    }
    
}

module.exports = new FighterService();