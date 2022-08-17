package com.jahnelgroup.tenselite.tenselite.controller
import com.jahnelgroup.tenselite.tenselite.entity.Assignment
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import com.jahnelgroup.tenselite.tenselite.service.AssignmentService
import org.springframework.web.bind.annotation.*


@RestController
@CrossOrigin(origins = ["*"])
class AssignmentController(

      val assignmentService : AssignmentService


){

    @GetMapping("/assignments")
    fun getAssignments() : List <Assignment>{

        return assignmentService.findAll()
    }


    @PostMapping("/newAssignment")
        fun addAssignment(@RequestParam projectId : Long, @RequestParam userId : Long,
                          @RequestParam rate : Long) : String{
            var newAssignment = Assignment()
        newAssignment.projectId = projectId
        newAssignment.rate = rate
        newAssignment.userId = userId
        return assignmentService.addAssignment(newAssignment)
        }

    @GetMapping("/assignmentsbyId")
    fun getAssignmentsbyId(@RequestParam id: Long): List<Assignment>{
        return assignmentService.getActiveAssignmentsbyId(id)
    }

    @GetMapping("/assignment")
    fun getAssignment(@RequestParam assignId: Long, @RequestParam projectId: Long ) : Assignment{
        return assignmentService.getAssignmentbyIds(assignId, projectId)
    }

    @GetMapping("/InactiveassignmentsbyId")
    fun getInAssignmentsbyId(@RequestParam id: Long): List<Assignment> {
        return assignmentService.getInActiveAssignmentsbyId(id)


    }

    @PatchMapping("/deactivateAssignment")
    fun deactivateAssignment(@RequestParam assignid : Long, @RequestParam projId : Long) : String{
        var Assignment = this.getAssignment(assignid, projId)
        Assignment.active = false
        return assignmentService.updateAssignment(Assignment)


    }

}



