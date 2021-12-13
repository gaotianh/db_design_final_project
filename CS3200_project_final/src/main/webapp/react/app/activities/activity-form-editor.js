import activityService from "./activity-service"
const { useParams, useHistory } = window.ReactRouterDOM;
const { useState, useEffect } = React;

const ActivityFormEditor = () => {
    const {userId, educationId, id} = useParams();
    const [activity, setActivity] = useState([]);
    const [education, setEducation] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (id !== "new") {
            findActivityById(id)
        }
    }, []);
    const findActivityById = (id) => activityService.findActivityById(id)
        .then(activity => setActivity(activity));
    const deleteActivity = (id) => activityService.deleteActivity(id)
        .then(() => history.goBack());
    const createActivityForEducation = (educationId, activity) => activityService.createActivityForEducation(educationId, activity)
        .then(() => history.goBack());
    const updateActivity = (id, newActivity) => activityService.updateActivity(id, newActivity)
        .then(() => history.goBack());
    return (
        <div>
            <h2>Activity Editor</h2>
            {education && <span><button className="btn btn-primary"
                                        onClick={() => history.push(`/users/${userId}/educations/${educationId}`)}>
                Edit Education
            </button><br/></span>}
            <button className="btn btn-primary"
                    onClick={() => history.push(`/users/${userId}`)}>
                Edit user
            </button>
            <br/>
            <label>Id</label>
            <input disabled value={activity.id}/><br/>
            <label>Name</label>
            <input onChange={(e) =>
                setActivity(activity => ({...activity, activityName: e.target.value}))}
                   value={activity.activityName}/><br/>
            <label>Description</label>
            <input onChange={(e) =>
                setActivity(activity => ({...activity, description: e.target.value}))}
                   value={activity.description}/><br/>
            <label>Start Date</label>
            <input type="date" onChange={(e) =>
                setActivity(activity => ({...activity, startDate: e.target.value}))}
                   value={activity.startDate}/><br/>
            <label>End Date</label>
            <input type="date" onChange={(e) =>
                setActivity(activity => ({...activity, endDate: e.target.value}))}
                   value={activity.endDate}/><br/>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteActivity(activity.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createActivityForEducation(educationId, activity)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateActivity(activity.id, activity)}>
                Save
            </button>
        </div>
    )
}

export default ActivityFormEditor
