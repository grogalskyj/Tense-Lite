package com.jahnelgroup.tenselite.tenselite.controller
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import com.jahnelgroup.tenselite.tenselite.service.UserService;


@RestController
class UserController(

  val userService: UserService

) {

  @GetMapping("/users")
  fun findAll(): List<User> {

    return userService.findAll()

   }

}