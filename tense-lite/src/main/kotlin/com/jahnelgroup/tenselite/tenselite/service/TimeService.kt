package com.jahnelgroup.tenselite.tenselite.service;
import org.springframework.stereotype.Service;
import com.jahnelgroup.tenselite.tenselite.entity.TimeEntry;
import com.jahnelgroup.tenselite.tenselite.repository.TimeEntryRepository
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestParam
import com.jahnelgroup.tenselite.tenselite.service.ProjectService;
import java.sql.Time
import kotlin.concurrent.timer

@Service
class TimeService (


    val timeRepository: TimeEntryRepository,
    val projectSerivce: ProjectService)
{

    fun findAllTimes(): List<TimeEntry>{

        return timeRepository.findAll()


    }

    fun addTimeEntry(@RequestBody timeEntry : TimeEntry) : String{
        timeRepository.save(timeEntry)
        return "Time Entry Saved"
    }

    fun findTimeEntry(@RequestParam Date: String, @RequestParam UserId: Long) : List<TimeEntry>{
       var TimeEntryList : List<TimeEntry> =  timeRepository.findSpecTime(Date, UserId)
        for (entry in TimeEntryList){
             entry.description =  projectSerivce.getProjectById(entry.project) + ' '+ entry.description

        }
        return TimeEntryList

    }

    fun deleteTime(@RequestParam id : String) : String{
        print(id)
        val Oldtime = timeRepository.deleteById(id.toLong())
        return "completed"

    }

    fun getTimeById(@RequestParam id : String) : TimeEntry{
        return timeRepository.findById(id.toLong()).get()
    }

    fun updateTime(@RequestParam Time : TimeEntry) : String{
         timeRepository.save(Time)
        return "Update Completed"
    }



}