# CS3200_FinalProject

#### 1. Name of the project
Education Lists Database

#### 2. Name of the team/Team Member
Tianhao Gao

#### 3. Brief description of the project
I create a database allowing users to store their educations and their activities during their education periods.
For example, a user can log in he/her account, check and modify the education list related to that account.
One student could record his/her bachelor school related to the account. 
Users could also record or modify their activities happened during their education periods. 

#### 4. Link to the latest data model as a single UML class diagram. 
[UML_final.pdf](https://github.com/gaotianh/db_design_final_project/blob/master/CS3200_project_final/UML_final.pdf)

#### 5. Description of user data model
Users could represent students or workers who want to record their educations and activities. 
<br>
A user data model has the following properties: 
- User ID: Int (As primary key)
- First name: String
- Last name: String
- User name: String
- Password: String
- Email: String
- Date of birth: Date

#### 6. Description of the two domain object data models
Education
<br>
This domain is used to store the education list of the user account. 
It includes an Enum which represents the degree of education like Bachelors and Masters.
<br>
A education object model has the following properties:
- Education ID: Int (Primary key)
- Degree: Degree
- School name: String
- Start date: Date
- End date: Date
- GAP: Decimal
- User ID: int (Foreign key)

Activity
   <br>
   This domain is used to store the activity list of each education. 
   <br>
   An activity object model has the following properties:
- Activity ID: Int (Primary key)
- Activity Name: String
- Description: String
- Start date: Date
- End date: Date
- Education ID: int (Foreign key)

#### 7. Description of the user to domain object relationship
The relationship of the user to domain object is one-to-many, where the domain object here is Education. 
One user could have multiple education experiences. For education model, it contains user's id as foreign key.
Thus, if the user is deleted, the related education list would also be deleted. 

#### 8. Description of the domain object to domain object relationship
The relationship of the domain object to domain object is one-to-many, where Education is on one side and activity
is on the many side. One user's education could have multiple activities. For Activity model, it contains education's id
as foreign key. Thus, if the education is removed, the corresponding activities would also be removed. 

#### 9. Description of the portable enumeration(s)
The enumeration Degree is implemented in this project. One education could have a specific degree, and the available 
degree could be chosen from Associates, Bachelors, Masters and Doctoral. For future implementation, more kinds of degree
could be added, including Joint degrees or teaching certification. 

#### 10. Description of the user interface requirements
- User List: Showing a list of users account and their brief information. One button "Add User" under title "User List" allows
creating another user. Links of each user could be clicked and turned to User Editor Interface. Another button "education" near each user allows accessing the Education List Interface.  
- User Editor: Showing the information of one user. Four buttons below allowing for delete, create, modify or return to 
User List interface. 
- Education List: Showing a list of education of one user. One link after the title "Education List for " allowing access
the current user's Editor interface. Two buttons below the title, one for adding new educations jumping to Education Editor
, and another button for return to User List. Each education link could be accessed and jumped to Education Editor of each 
education. There is one button near each education link, called "Activities", would jump to the Activity List interface. 
- Education Editor: Showing the information of one Education. There are two buttons below the title "Education Editor", 
one is "View Activity" allowing to view the activities of the current education, and the other one is "Edit User" allowing 
to editing current user in User Editor. After the information, there are four buttons at the bottom for deleting, modifying, 
and returning to previous page. 
- Activity List: Showing a list of activities. There are two links in the title: one could be accessed to current user editor
interface, and the other one could access the current education editor interface. There are two buttons below the title:
one "Add Activity" could create a new activity to the current list, and the other "View Education" would return to previos
education list. After two buttons are several links indicating the activities. 
- Activity Editor: Showing the information of Activities. One button below the title connect to User's Editor. There are 
four button below for deleting, creating, saving, and canceling. 


#### 11. Future implementation
There are a few future implementations. Firstly, more education genre could be added, including Joint Degree or Teaching 
Certificate. Also, other domain types like Working experience could be connected to the User model. Other object models 
like Academic projects could also be connected to the Education model as a many-to-one relationship. 

<hr>

### Problem Statement
For a group, like a company or just a club, if there has some tasks or events needed to be hold, you definitely want an
experienced person to handle it. Say you want to hold a concert in Northeastern University, then you must need someone who know how to play instrument
or know how to hold a large event or someone who graduated from Northeastern University. 
These kinds of information might be located separately, on the resume, from someone's blog,
or you just heard of some talking. If there has a database which record these types of information, you could find the people 
you needed efficiently, instead of checking with all members.  

### Solution Statement
The solution is first create a database using SQL. The user model would be the member in the group, and domain object include
Education and Activities they hold. This databased would record everyone's education and activities allowing other people to 
search or find when they needed. 
<br>

Then, a Java Spring framework is created based on the database. CRUD operations for all domain objects are implemented, allowing
users to delete, create, check, modify. A web interface using React Javascript could then be built. From that web interface,
you could create your own user account, education and related activities for education. Each model has a list interface for
navigating the whole list, and an editor interface for checking the specific information and modify if needed.
<br>

Overall, if someone needs an expert on one kind of activity or need to hold event/interview on a specific university, they
could navigate and search this database, and match their need efficiently. 

### User

The typical user could be anyone in a group, like companies, club, or even classmates group. Anyone could record their experiences
in the database, and if anyone wants to hold any kind of events or interview school's teacher, or even want some kind of 
network resources. They could first search this database, and filter out the information efficiently. 

### Domain Objects
Education
<br>
This domain is used to store the education list of the user account.
It includes an Enum which represents the degree of education like Bachelors and Masters.
<br>
A education object model has the following properties:
- Education ID: Int (Primary key)
- Degree: Degree
- School name: String
- Start date: Date
- End date: Date
- GAP: Decimal
- User ID: int (Foreign key)

Activity
<br>
This domain is used to store the activity list of each education.
<br>
An activity object model has the following properties:
- Activity ID: Int (Primary key)
- Activity Name: String
- Description: String
- Start date: Date
- End date: Date
- Education ID: int (Foreign key)