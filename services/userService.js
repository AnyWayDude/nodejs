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
            return null;
        }
        return result;
    }

    getById(id) {
        const result = UserRepository.getOne(user => user.id === id);
        if(!result) {
            return null;
        }
        return result;
    }

    create(user) {
        const result = UserRepository.create(user)
        if(!result) {
            return null;
        }
        return result;
    }

    update(id, userToUpdate) {
        const result = UserRepository.update(id, userToUpdate)
        if(!result) {
            return null;
        }
        return result;
    }

    delete(id) {
        const result = UserRepository.delete(id)
        if(!result) {
            return null;
        }
        return result;
    }

}

module.exports = new UserService();