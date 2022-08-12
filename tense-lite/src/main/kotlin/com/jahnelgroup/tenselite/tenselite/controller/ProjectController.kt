package com.jahnelgroup.tenselite.tenselite.controller;
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController;
import com.jahnelgroup.tenselite.tenselite.entity.Project
import com.jahnelgroup.tenselite.tenselite.service.ProjectService;
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PatchMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@CrossOrigin(origins = ["*"])
class ProjectController(val projectService : ProjectService) {

    @GetMapping("/projects/ProjectEntries")
    fun findAll(): List<Project>{
        return projectService.findAllProjects()
    }


    @GetMapping("/projects/getProject")
    fun findOne(@RequestParam Name: String) : Project{
        return projectService.findProject(Name)
    }




    @PostMapping("/projects/addProject")
    fun addProject( @RequestParam Name : String, @RequestParam Start_Date : String,
            @RequestParam End_Date : String, @RequestParam billable : Boolean) : String {
        var newProject = Project()
        newProject.project_name = Name
        newProject.start_date = Start_Date
        newProject.end_date = End_Date
        newProject.billable = billable
        return projectService.addNewProject(newProject)
    }

    @DeleteMapping("projects/deleteProject")
        fun deleteProject(@RequestParam Name : String) : String{
            return projectService.deleteProject(Name)

        }







    @PutMapping("/projects/editProject")
    fun updateProject(@RequestParam oldName : String,
                      @RequestParam newName: String,
                      @RequestParam newSDate : String,
                      @RequestParam newEDate: String,
                      @RequestParam newBillable: String): String{

        return projectService.updateProject(oldName, newName, newSDate, newEDate, newBillable)

    }

    @GetMapping("/projects/getProjectName")
    fun getProject(@RequestParam id : String) : String
    {
        return projectService.getProjectById(id.toLong())

    }



}