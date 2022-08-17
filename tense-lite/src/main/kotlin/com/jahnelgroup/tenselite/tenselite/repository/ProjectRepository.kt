package com.jahnelgroup.tenselite.tenselite.repository

import org.springframework.data.jpa.repository.JpaRepository
import com.jahnelgroup.tenselite.tenselite.entity.Project;
import com.jahnelgroup.tenselite.tenselite.entity.User
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestParam


interface ProjectRepository: JpaRepository<Project, Long>, CrudRepository<Project, Long>{

    @Query(value ="select * from projects p where p.project_name = :Name", nativeQuery = true)
    fun findByProjectName(@RequestParam Name : String): Project;
}