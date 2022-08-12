package com.jahnelgroup.tenselite.tenselite.respository
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import org.springframework.data.jpa.repository.Modifying
import org.springframework.web.bind.annotation.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
@Repository
interface UserRepository: JpaRepository<User, Long>, CrudRepository<User, Long>{


    @Query(value ="select * from users u where u.Email = :Email", nativeQuery = true)
    fun findByEmail(@RequestParam Email : String): User;


    @Modifying
    @Transactional
    @Query(value = "update users  set First_Name = :First_Name, Email = :Email, Security_Role = :Enabled ,Last_Name = :Last_Name where id = :ID", nativeQuery =  true )
    fun updateUser(@RequestParam First_Name : String, @RequestParam Last_Name : String, @RequestParam Email : String, @RequestParam Enabled : String, @RequestParam ID : Long)
    }