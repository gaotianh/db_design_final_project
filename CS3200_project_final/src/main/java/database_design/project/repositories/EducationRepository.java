package database_design.project.repositories;

import database_design.project.models.Education;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EducationRepository extends CrudRepository<Education, Integer> {

    @Query(value = "SELECT * FROM education", nativeQuery = true)
    public List<Education> findAllEducations();

    @Query(value = "SELECT * FROM education WHERE id=:educationId", nativeQuery = true)
    public Education findEducationById(@Param("educationId") Integer id);

    @Query(value = "SELECT * FROM education where user_id=:userId", nativeQuery = true)
    public List<Education> findEducationByUserId(@Param("userId") Integer id);
}
