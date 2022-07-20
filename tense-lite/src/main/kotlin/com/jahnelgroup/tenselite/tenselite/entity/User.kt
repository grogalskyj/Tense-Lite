package com.jahnelgroup.tenselite.tenselite.entity
import javax.persistence.Entity
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;


@Entity
@Table(name = "users")
class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "id")
    var id_Users: Long = 0L




    @Column(nullable  = false,  name = "First_Name")
    var First_Name = ""



    @Column(name = "Last_Name",  nullable = false)

    var lastName = ""



    @Column(name = "Email",  nullable = false)

    var email = ""



    @Column(name = "Security_Role",  nullable = false)

    var enabled = ""
}