package com.jahnelgroup.tenselite.tenselite.respository
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.jahnelgroup.tenselite.tenselite.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.jpa.repository.Query;
@Repository
interface UserRepository: JpaRepository<User, Long>, CrudRepository<User, Long>{


    @Query(value ="select * from users u where u.Email = :Email", nativeQuery = true)
    fun findByEmail(@RequestParam Email : String): User;
}