import activityService from "./activity-service";
import userService from "../users/user-service";
import educationService from "../educations/education-service";
const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ActivitiesList = () => {
    const {userId, educationId, id} = useParams();
    const [activities, setActivities] = useState([]);
    const [education, setEducation] = useState([]);
    const [user, setUser] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllActivitiesForEducation(educationId)}, []);
    useEffect(() => {findEducationById(educationId)}, []);
    useEffect(() => {findUserById(userId)}, []);
    const findUserById = (id) => userService.findUserById(id)
        .then(user => setUser(user));
    const findAllActivitiesForEducation = (educationId) => activityService.findAllActivitiesForEducation(educationId)
        .then(activities => setActivities(activities));
    const findEducationById = (id) => educationService.findEducationById(id)
        .then(education => setEducation(education));

    return(
        <div>
            <h2>Activity List
                {user && <span> of <Link to={`/users/${userId}`}>{user.firstName}</Link></span>}
                {education && <span> for <Link to={`/users/${userId}/educations/${educationId}`}>{education.schoolName}</Link></span>}</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}/educations/${educationId}/Activities/new`)}>
                Add Activity
            </button>
            {user &&
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}/educations`)}>
                View educations for {user.firstName}
            </button>}
            <ul className="list-group">
                {
                    activities.map(activities =>
                        <li key={activities.id}>
                            <Link to={`/users/${userId}/educations/${educationId}/activities/${activities.id}`}>
                                {activities.activityName},
                                {activities.description},
                                {activities.startDate},
                                {activities.endDate}
                                {/*{literature.genre},*/}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )

}

export default ActivitiesList
