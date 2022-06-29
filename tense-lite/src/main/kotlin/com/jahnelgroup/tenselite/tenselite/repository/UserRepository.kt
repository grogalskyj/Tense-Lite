package com.jahnelgroup.tenselite.tenselite.respository
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Repository;
import com.jahnelgroup.tenselite.tenselite.entity.User;

@Repository
interface UserRepository: JpaRepository<User, Long> {

}
