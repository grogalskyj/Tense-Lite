package com.jahnelgroup.tenselite.tenselite.controller
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import com.jahnelgroup.tenselite.tenselite.service.UserService;
import org.springframework.web.bind.annotation.*
import java.util.StringJoiner

var primaryId = 5L
@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
class UserController(

  val userService: UserService

) {

    @GetMapping("/users")
    fun findAll(): List<User> {

        return userService.findAll()
    }


    @GetMapping("/getuser")
    fun findOne(@RequestParam id: Long): User {
        return userService.getUserById(id)


    }

    @PostMapping(path = ["/adduser"])
    fun addUser(@RequestParam Firstname: String,
                @RequestParam Lastname: String,
                @RequestParam Email: String,
                @RequestParam Securityrole: String): String {
        var newUser = User()
        newUser.First_Name = Firstname
        newUser.lastName = Lastname
        newUser.email = Email
        newUser.enabled = Securityrole
        return userService.addUser(newUser)
    }

//    @PatchMapping(path = ["/updateuser/{id}"])
//    fun updateUser(@PathVariable(value = "id") id : Long, @Requestparam newUserDetails:
//    }


    @DeleteMapping(path = ["/delete/{id}"])
    fun DeleteUser(@PathVariable(value = "id") id: Long) : String {
        return userService.deleteUser(id)


    }
}




