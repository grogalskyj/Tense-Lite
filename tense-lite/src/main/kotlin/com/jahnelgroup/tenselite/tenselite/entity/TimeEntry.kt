package com.jahnelgroup.tenselite.tenselite.entity;
import javax.persistence.Entity
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;
import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name = "time")
class TimeEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(nullable = false, name = "idtime")
    var idtime : Long = 0L



    @Column(nullable = false, name = "date")
    var date =  ""

    @Column(nullable = false, name = "project_id")
    var project : Long  = 0L

    @Column(nullable = false, name = "work_description")
    var description = ""


    @Column(nullable = false, name = "number_hours")
    var numhours : Float = 0F

    @Column(nullable = false, name = "user_id")
    var user : Long = 0L

}