package com.jahnelgroup.tenselite.tenselite.service

import com.jahnelgroup.tenselite.tenselite.respository.UserRepository
import org.springframework.stereotype.Service;
import com.jahnelgroup.tenselite.tenselite.entity.User;



@Service
class UserService(

  val userRepository: UserRepository

) {

   fun findAll(): List<User> {

    return userRepository.findAll()

  }

}