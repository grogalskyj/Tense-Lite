package com.jahnelgroup.tenselite.tenselite.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import com.jahnelgroup.tenselite.tenselite.entity.TimeEntry;
import org.springframework.web.bind.annotation.RequestParam

@Repository
interface TimeEntryRepository: JpaRepository<TimeEntry, Long>, CrudRepository<TimeEntry, Long>{


    @Query(value = "select * from time t where t.date = :Date AND t.user_id = :UserId", nativeQuery =  true)
    fun findSpecTime(@RequestParam Date: String, @RequestParam UserId: Long): List<TimeEntry>;
}