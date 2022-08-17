package com.jahnelgroup.tenselite.tenselite.controller
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import com.jahnelgroup.tenselite.tenselite.service.UserService;
import org.springframework.web.bind.annotation.*
import java.util.StringJoiner

var primaryId = 5L
@RestController
@CrossOrigin(origins = ["*"])
class UserController(

  val userService: UserService

) {

    @GetMapping("/users")
    fun findAll(): List<User> {

        return userService.findAll()
    }


    @GetMapping("/getuser")
    fun findOne(@RequestParam email : String): User {
        return userService.getUser(email)
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

    @PatchMapping(path = ["/updateuser"])
    fun updateUser(@RequestParam Email : String, @RequestBody newUserDetails : MutableMap<String, String> ) :
    String{
        print(newUserDetails.keys)
        val olduser = this.findOne(Email)
        print(olduser)
        for (key in newUserDetails.keys){
            if (key == "email" ){
                olduser.email = newUserDetails["email"].toString()
            }
            if (key == "First_Name"){
                olduser.First_Name = newUserDetails["First_Name"].toString()
            }
            if (key == "Last_Name"){
                olduser.lastName = newUserDetails["Last_Name"].toString()
            }
            if (key == "Security_Role"){
                olduser.enabled = newUserDetails["Security_Role"].toString()
            }
        }

        return userService.updateUser(olduser)
    }


    @DeleteMapping(path = ["/delete/{id}"])
    fun DeleteUser(@PathVariable(value = "id") id: Long) : String {
        return userService.deleteUser(id)


    }
}




