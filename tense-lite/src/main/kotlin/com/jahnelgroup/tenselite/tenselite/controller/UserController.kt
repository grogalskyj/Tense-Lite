package com.jahnelgroup.tenselite.tenselite.controller
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import com.jahnelgroup.tenselite.tenselite.service.UserService;
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.ResponseBody
import java.util.StringJoiner


@RestController
class UserController(

  val userService: UserService

) {

    @GetMapping("/users")
    fun findAll(): List<User> {

        return userService.findAll()
    }
}
//    @PostMapping("/get_user/add")
//    fun @ResponseBody add_User(@RequestParam First_name: String,
//    @RequestParam Last_name : String, @RequestParam Email : String,
//                               @RequestParam Security_Role : String) : String
//    {
//        val user = User()
//
//        user.First_name  = First_name

//    ){
//        return userService.find_User(id)
//    }
//
//}