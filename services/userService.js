const { UserRepository } = require('../repositories/userRepository');

class UserService {

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getCollection() {
        const item = UserRepository.getAll();
        if(!item) {
            return null;
        }
        return item;
    }

    getById(id) {
        const item = UserRepository.getOne(user => user.id === id);
        if(!item) {
            return null;
        }
        return item;
    }

    create(user) {
        const item = UserRepository.create(user)
        if(!item) {
            return null;
        }
        return item;
    }

    update(id, userToUpdate) {
        const item = UserRepository.update(id, userToUpdate)
        if(!item) {
            return null;
        }
        return item;
    }

    delete(id) {
        const item = UserRepository.delete(id)
        if(!item) {
            return null;
        }
        return item;
    }

}

module.exports = new UserService();