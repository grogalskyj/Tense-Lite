package com.jahnelgroup.tenselite.tenselite.service

import com.jahnelgroup.tenselite.tenselite.respository.UserRepository
import org.springframework.stereotype.Service;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import java.net.FileNameMap
import javax.persistence.criteria.CriteriaBuilder.In
import org.springframework.web.bind.annotation.RequestBody;


@Service
class UserService(

  val userRepository: UserRepository

) {

   fun findAll(): List<User> {

    return userRepository.findAll()

  }

    fun getUser(email : String): User {
        return userRepository.findByEmail(email)
    }

    fun addUser(@RequestBody user: User) : String{
             userRepository.save(user)
        return "All done"
    }

    fun deleteUser(id : Long): String{
        if(userRepository.existsById(id)) {
            userRepository.deleteById(id)
            return " Deleted"
        }
       return "Id Not Found!"
    }


}