package database_design.project.daos;

import database_design.project.models.Activity;
import database_design.project.models.Education;
import database_design.project.repositories.ActivityRepository;
import database_design.project.repositories.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ActivityOrmDao {
    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    EducationRepository educationRepository;

    @PostMapping("/api/activities")
    public Activity createActivity(@RequestBody Activity activity) {
        return activityRepository.save(activity);
    }

    @PostMapping("/api/educations/{educationId}/activities")
    public Activity createActivityforEducation(@PathVariable("educationId") Integer eid,
                                                @RequestBody Activity activity) {
        Education education = educationRepository.findEducationById(eid);
        activity.setEducation(education);
        return activityRepository.save(activity);
    }

    @GetMapping("/api/educations/{educationId}/activities")
    public List<Activity> findActivitiesforEducation(@PathVariable("educationId") Integer aid) {
        return activityRepository.findActivitiesByEducationId(aid);
    }

    @GetMapping("/api/activities")
    public List<Activity> findAllActivities() {
        return activityRepository.findAllActivities();
    }

    @GetMapping("/api/activities/{activityId}")
    public Activity findActivityById(@PathVariable("activityId") Integer id) {
        return activityRepository.findActivitiesById(id);
    }

    @PutMapping("/api/activities/{activityId}")
    public Activity updateActivity(@PathVariable("activityId") Integer id,
                                       @RequestBody Activity updateActivity) {
        Activity activity = activityRepository.findActivitiesById(id);
        activity.setActivityName(updateActivity.getActivityName());
        activity.setDescription(updateActivity.getDescription());
        activity.setStartDate(updateActivity.getStartDate());
        activity.setEndDate(updateActivity.getEndDate());
//        activity.setEducation(updateActivity.getEducation());

        return activityRepository.save(activity);
    }

    @DeleteMapping("/api/activities/{activityId}")
    public void deleteActivity(@PathVariable("activityId") Integer id) {
        activityRepository.deleteById(id);
    }
}
