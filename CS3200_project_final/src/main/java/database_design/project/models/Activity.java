package database_design.project.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String activityName;
    private String description;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getActivityName() { return activityName; }
    public void setActivityName(String activityName) { this.activityName = activityName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startDate;
    public Date getStartDate() { return startDate; }
    public void setStartDate(Date startDate) { this.startDate = startDate; }

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDate;
    public Date getEndDate() { return endDate; }
    public void setEndDate(Date endDate) { this.endDate = endDate; }

    @ManyToOne
    @JsonIgnore
    private Education education;
    public Education getEducation() { return education; }
    public void setEducation(Education education) { this.education = education; }

    public Activity(Integer id, String activityName, String description, Date startDate, Date endDate, Education education) {
        this.id = id;
        this.activityName = activityName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.education = education;
    }

    public Activity() {}
}
