package database_design.project.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String schoolName;
    private float gpa;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getSchoolName() { return schoolName; }
    public void setSchoolName(String schoolName) { this.schoolName = schoolName; }

    @Enumerated(EnumType.STRING)
    private Degree degree;
    public Degree getDegree() { return degree; }
    public void setDegree(Degree degree) { this.degree = degree; }

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startDate;
    public Date getStartDate() { return startDate; }
    public void setStartDate(Date startDate) { this.startDate = startDate; }

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDate;
    public Date getEndDate() { return endDate; }
    public void setEndDate(Date endDate) { this.endDate = endDate; }

    public float getGPA() { return gpa; }
    public void setGPA(float gpa) { this.gpa = gpa;}

    @ManyToOne
    @JsonIgnore
    private User user;
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Education(Integer id, Degree degree, String schoolName, Date startDate, Date endDate, float gpa, User user) {
        this.id = id;
        this.degree = degree;
        this.schoolName = schoolName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.gpa = gpa;
        this.user = user;
    }

    public Education() {}
}
