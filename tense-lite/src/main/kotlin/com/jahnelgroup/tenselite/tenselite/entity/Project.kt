package com.jahnelgroup.tenselite.tenselite.entity
import org.apache.el.parser.AstFalse
import org.springframework.format.annotation.DateTimeFormat
import javax.persistence.Entity
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "projects")
class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "idprojects")

    var projectId : Long = 0L

    @Column(name = "project_name")
    var project_name = ""

    @DateTimeFormat(pattern = "yyyy-mm-dd" )
    @Column(name = "start_date")
    var start_date = ""

    @DateTimeFormat(pattern = "yyyy-mm-dd" )
    @Column(name = "end_date")
    var end_date = ""

    @Column(name = "billable")
    var billable : Boolean = false




}