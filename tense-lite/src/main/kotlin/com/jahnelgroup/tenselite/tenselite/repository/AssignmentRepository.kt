package com.jahnelgroup.tenselite.tenselite.repository
import com.jahnelgroup.tenselite.tenselite.entity.Assignment;

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Modifying
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.expression.spel.ast.Assign
import org.springframework.stereotype.Repository
import org.springframework.transaction.annotation.Transactional
import org.springframework.web.bind.annotation.RequestParam
import javax.persistence.PreUpdate


@Repository
interface AssignmentRepository : JpaRepository<Assignment, Long>, CrudRepository<Assignment, Long>{

    @Query(value = "select * from assignments a where a.id_user = :id AND a.active = true", nativeQuery =  true)
    fun getActiveAssignmentsById(@RequestParam id : Long): List<Assignment>;

    @Query(value = "select * from assignments a where a.id_user = :id AND a.active = false", nativeQuery =  true)
    fun getInActiveAssignmentsById(@RequestParam id : Long): List<Assignment>;


    @Query(value = "select * from assignments a where a.id_assignment = :id AND a.id_project = :projId ", nativeQuery =  true)
    fun getAssignment(@RequestParam id : Long, @RequestParam projId : Long): Assignment;

    @Modifying
    @Transactional
    @Query(value = "update assignments set active = :active where id_assignment = :assignId ", nativeQuery = true)
    fun updateAssignment(@RequestParam assignId : Long, @RequestParam active : Boolean);



}






