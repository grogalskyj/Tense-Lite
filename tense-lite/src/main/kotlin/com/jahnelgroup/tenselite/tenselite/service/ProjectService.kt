package com.jahnelgroup.tenselite.tenselite.service
import com.jahnelgroup.tenselite.tenselite.entity.Project
import com.jahnelgroup.tenselite.tenselite.repository.ProjectRepository;
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import javax.print.DocFlavor.STRING

@Service
class ProjectService (

    val projectRepository: ProjectRepository


)

{

    fun findAllProjects() : List<Project>{
        return projectRepository.findAll()
    }

    fun findProject(@RequestParam Name : String) : Project{
         return projectRepository.findByProjectName(Name)
    }



    fun addNewProject(@RequestBody project : Project) : String{
         projectRepository.save(project)
        return "Project Saved!"
    }


    fun deleteProject(@RequestParam Name : String) : String{
        val oldProject = projectRepository.findByProjectName(Name)
        projectRepository.deleteById(oldProject.projectId)
        return "Project Deleted"



    }

    fun updateProject(@RequestParam oldName : String,
                      @RequestParam Name : String,
                      @RequestParam SDate : String,
                      @RequestParam EDate : String,
                      @RequestParam Billable : String) : String {
        val oldProject = projectRepository.findByProjectName(oldName)
        val Project = projectRepository.findById(oldProject.projectId).get()
        Project.project_name = Name
        Project.billable = Billable.toBoolean()
        Project.start_date = SDate
        Project.end_date = EDate
        projectRepository.save(Project)
        return "All Done"

    }

    fun getProjectById(@RequestParam id : Long) : String{
        var project = projectRepository.findById(id).get()
        return project.project_name
    }



}