package database_design.project.daos;

import database_design.project.models.Education;
import database_design.project.models.User;
import database_design.project.repositories.UserRepository;
import database_design.project.repositories.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class EducationOrmDao {
    @Autowired
    EducationRepository educationRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/educations")
    public Education createEducation(@RequestBody Education education) {
        return educationRepository.save(education);
    }

    @PostMapping("/api/users/{userId}/educations")
    public Education createEducationForUser(@PathVariable("userId") Integer uid,
                                                @RequestBody Education education) {
        User user = userRepository.findUserById(uid);
        education.setUser(user);
        return educationRepository.save(education);
    }

    @GetMapping("/api/users/{userId}/educations")
    public List<Education> findEducationsForUser(@PathVariable("userId") Integer userId) {
        return educationRepository.findEducationByUserId(userId);
    }

    @GetMapping("/api/educations")
    public List<Education> findAllEducations() {
        return educationRepository.findAllEducations();
    }

    @GetMapping("/api/educations/{educationId}")
    public Education findEducationById(@PathVariable("educationId") Integer id) {
        return educationRepository.findEducationById(id);
    }

    @PutMapping("/api/educations/{educationId}")
    public Education updateEducation(@PathVariable("educationId") Integer id,
                                       @RequestBody Education updateEducation) {
        Education education = educationRepository.findEducationById(id);
        education.setSchoolName(updateEducation.getSchoolName());
        education.setDegree(updateEducation.getDegree());
        education.setGPA(updateEducation.getGPA());
        education.setStartDate(updateEducation.getStartDate());
        education.setEndDate(updateEducation.getEndDate());
        return educationRepository.save(education);
    }

    @DeleteMapping("/api/educations/{educationId}")
    public void deleteEducation(@PathVariable("educationId") Integer id) {
        educationRepository.deleteById(id);
    }
}
