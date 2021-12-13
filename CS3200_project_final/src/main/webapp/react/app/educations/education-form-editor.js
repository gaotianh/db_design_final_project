import educationService, {findEducationById} from "./education-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const EducationFormEditor = () => {
    const {userId, id} = useParams();
    const [education, setEducation] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findEducationById(id)
        }
    }, []);
    const findEducationById = (id) => educationService.findEducationById(id)
        .then(education => setEducation(education));
    const deleteEducation = (id) => educationService.deleteEducation(id)
        .then(() => history.goBack());
    const createEducationForUser = (userId, education) => educationService.createEducationForUser(userId, education)
        .then(() => history.goBack());
    const updateEducation = (id, newEducation) => educationService.updateEducation(id, newEducation)
        .then(() => history.goBack());
    return (
        <div>
            <h2>Education Editor</h2>
            {education.id && <span><button className="btn btn-primary"
                                        onClick={() => history.push(`/users/${userId}/educations/${education.id}/activities`)}>
                View Activities for {education.schoolName}
            </button><br/></span>}
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}`)}>
                Edit user
            </button>
            <br/>
            <label>Id</label>
            <input disabled value={education.id}/><br/>
            <label>School Name</label>
            <input onChange={(e) =>
                setEducation(education => ({...education, schoolName: e.target.value}))}
                   value={education.schoolName}/><br/>
            <label>Degree</label>
            <select onChange={(e) =>
                setEducation(education => ({...education, degree: e.target.value}))}
                    value={education.degree}>
                <option>Associates</option>
                <option>Bachelors</option>
                <option>Masters</option>
                <option>Doctoral</option>
            </select><br/>

            <label>Start Date</label>
            <input type="date" onChange={(e) =>
                setEducation(education => ({...education, startDate: e.target.value}))}
                   value={education.startDate}/><br/>
            <label>End Date</label>
            <input type="date" onChange={(e) =>
                setEducation(education => ({...education, endDate: e.target.value}))}
                   value={education.endDate}/><br/>
            <label>GPA</label>
            <input onChange={(e) =>
                setEducation(education => ({...education, gpa: e.target.value}))}
                   value={education.gpa}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteEducation(education.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createEducationForUser(userId, education)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateEducation(education.id, education)}>
                Save
            </button>
        </div>
    )
}

export default EducationFormEditor
