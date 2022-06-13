const { UserRepository } = require('../repositories/userRepository');

class UserService {

    search(search) {
        const result = UserRepository.getOne(search);
        if(!result) {
            return null;
        }
        return result;
    }

    getCollection() {
        const result = UserRepository.getAll();
        if(!result) {
            return [];
        }
        return result;
    }

    getById(id) {
        const result = UserRepository.getOne(user => user.id === id);
        if(!result) {
           throw Error('User not found');
        }
        return result;
    }

    create(user) {
        const result = UserRepository.create(user);
        if(!result) {
            return null;
        }
        return result;
    }

    update(id, userToUpdate) {
        this.getById(id);
        const result = UserRepository.update(id, userToUpdate);

        return result;
    }

    delete(id) {
        this.getById(id);
        
        UserRepository.delete(id);

        return {
            status: 'ok'
        };
    }
}

module.exports = new UserService();