package com.jahnelgroup.tenselite.tenselite.service

import com.jahnelgroup.tenselite.tenselite.respository.UserRepository
import org.springframework.stereotype.Service;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import com.sun.security.auth.UserPrincipal
import java.net.FileNameMap
import javax.persistence.criteria.CriteriaBuilder.In
import org.springframework.web.bind.annotation.RequestBody;
import java.security.Security
// import org.springframework.security.core.userdetails.User as SecUser;


@Service
class UserService(

  val userRepository: UserRepository

) {

    fun loadUserByEmail(email : String): User{
        val user = userRepository.findByEmail(email)
        if (user == null){
            throw Exception ("Non-Existent Email")
        }


        return user



    }


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

    fun updateUser(user : User) : String {
        userRepository.updateUser(user.First_Name, user.lastName, user.email, user.enabled, user.id_Users)
        return "User Updated"
    }


}