package com.jahnelgroup.tenselite.tenselite.controller;
import com.jahnelgroup.tenselite.tenselite.entity.TimeEntry
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping
import com.jahnelgroup.tenselite.tenselite.entity.User;
import com.jahnelgroup.tenselite.tenselite.service.TimeService;
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestParam
import javax.print.DocFlavor.STRING


@RestController
@CrossOrigin(origins = ["*"])
class TimeController (

    val timeService: TimeService
    )

{

    @GetMapping("/time/TimeEntries")
    fun findAll(): List<TimeEntry>{
        return timeService.findAllTimes()

    }


    @GetMapping("/time/getTime")
    fun findTimeEntry(@RequestParam Date : String, @RequestParam UserId: Long): List <TimeEntry>{
        return timeService.findTimeEntry(Date, UserId)

    }

    @PostMapping("/time/addTimeEntry")
    fun addTimeEntry(@RequestParam Date: String, @RequestParam Project: Long,
            @RequestParam Work_Description : String, @RequestParam NumHours: Float,
    @RequestParam UserId : Long) : String{

        var newTimeEntry = TimeEntry()
        newTimeEntry.date = Date
        newTimeEntry.project = Project
        newTimeEntry.description = Work_Description
        newTimeEntry.numhours = NumHours
        newTimeEntry.user = UserId
        return timeService.addTimeEntry(newTimeEntry)
    }


    @DeleteMapping("/time/deleteTime")
    fun deleteTimeEntry(@RequestParam id : String) : String {
        return timeService.deleteTime(id)

    }

    @GetMapping("/time/getTimebyId")
    fun getTime(@RequestParam id : String) : TimeEntry
    {
        return this.timeService.getTimeById(id)
    }

    @PutMapping("/time/editTime")
    fun editTimeEntry(@RequestParam id : String, @RequestParam date: String,
    @RequestParam Hours : String, @RequestParam Work_Description: String, @RequestParam projId: String) : String{
        var newTime = this.getTime((id))
        newTime.description = Work_Description
        newTime.date = date
        newTime.numhours = Hours.toFloat()
        newTime.project = projId.toLong()
        return timeService.updateTime(newTime)

    }

}