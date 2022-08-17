package com.jahnelgroup.tenselite.tenselite.entity
import javax.persistence.*


@Entity
@Table (name = "assignments")
class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "id_assignment")

    var assignmentId : Long = 0L

    @Column(name = "id_user")
    var userId  : Long = 0L

    @Column(name = "id_project")
    var projectId : Long = 0L

    @Column(name = "rate")
    var rate : Long = 0L

    @Column(name = "active")
    var active : Boolean = true


}
