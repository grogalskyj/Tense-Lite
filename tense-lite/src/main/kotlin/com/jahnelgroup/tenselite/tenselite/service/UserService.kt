package com.jahnelgroup.tenselite.tenselite.service

import com.jahnelgroup.tenselite.tenselite.respository.UserRepository
import org.springframework.stereotype.Service;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import java.net.FileNameMap
import javax.persistence.criteria.CriteriaBuilder.In


@Service
class UserService(

  val userRepository: UserRepository

) {

   fun findAll(): List<User> {

    return userRepository.findAll()

  }

    fun find_User(id : Long): User {

        return userRepository.getReferenceById(id)
    }


}