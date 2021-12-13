package database_design.project.repositories;

import database_design.project.models.Activity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ActivityRepository extends CrudRepository<Activity, Integer> {

    @Query(value = "SELECT * FROM activity", nativeQuery = true)
    public List<Activity> findAllActivities();

    @Query(value = "SELECT * FROM activity WHERE id=:activityId", nativeQuery = true)
    public Activity findActivitiesById(@Param("activityId") Integer id);

    @Query(value = "SELECT * FROM activity where education_id=:educationId", nativeQuery = true)
    public List<Activity> findActivitiesByEducationId(@Param("educationId") Integer id);
}
