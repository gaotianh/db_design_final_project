import educationService, {findAllEducationsForUser} from "./education-service";
import userService from "../users/user-service";
import activityService from "../activities/activity-service";
import writerService from "../writers/writer-service";

const { Link, useHistory, useParams } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const EducationList = () => {
    const {userId} = useParams();
    const [educations, setEducations] = useState([]);
    const [user, setUser] = useState([]);
    const history = useHistory();
    useEffect(() => {findAllEducationsForUser(userId)}, []);
    useEffect(() => {findUserById(userId)}, []);
    const findAllEducationsForUser = (userId) => educationService.findAllEducationsForUser(userId)
        .then(educations => setEducations(educations));
    const findUserById = (id) => userService.findUserById(id)
        .then(user => setUser(user));
    return(
        <div>
            <h2>Education List {user && <span> for <Link to={`/users/${userId}`}>{user.firstName}</Link></span>}</h2>
            {/*<h2>Education List </h2>*/}
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}/educations/new`)}>
                Add Education
            </button>
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/`)}>
                View users
            </button>
            <ul className="list-group">
                {
                    educations.map(education =>
                        <li key={education.id}>
                            <Link to={`/users/${userId}/educations/${education.id}`}>
                                {education.degree},
                                {education.schoolName},
                                {education.startDate},
                                {education.endDate},
                                {education.gpa}
                            </Link>
                            <Link to={`/users/${userId}/educations/${education.id}/activities`}>
                                <button className="btn btn-primary">
                                    Activities
                                </button>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )

}

export default EducationList