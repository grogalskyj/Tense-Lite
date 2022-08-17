package com.jahnelgroup.tenselite.tenselite.service

import com.jahnelgroup.tenselite.tenselite.entity.Assignment
import com.jahnelgroup.tenselite.tenselite.repository.AssignmentRepository
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestParam

@Service
class AssignmentService(

        val assignmentRepository: AssignmentRepository

) {

    fun findAll(): List<Assignment>{


        return assignmentRepository.findAll()
    }

    fun addAssignment(@RequestParam assignment : Assignment) : String{
         assignmentRepository.save(assignment)
        return "Assignment Saved"

    }

    fun getActiveAssignmentsbyId(@RequestParam id : Long) : List<Assignment>{
        return assignmentRepository.getActiveAssignmentsById(id)
    }


    fun getInActiveAssignmentsbyId(@RequestParam id : Long) : List<Assignment>{
        return assignmentRepository.getInActiveAssignmentsById(id)
    }

    fun getAssignmentbyIds(@RequestParam assignId: Long,@RequestParam projId: Long ) : Assignment{
        return assignmentRepository.getAssignment(assignId, projId)


    }

    fun updateAssignment(@RequestParam assignment : Assignment) : String{
        assignmentRepository.updateAssignment(assignment.assignmentId, assignment.active )
        return "update made"
    }




}