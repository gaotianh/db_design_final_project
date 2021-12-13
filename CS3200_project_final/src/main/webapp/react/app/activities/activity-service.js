const ACTIVITIES_URL = "http://localhost:8080/api/activities"
const EDUCATIONS_URL = "http://localhost:8080/api/educations"

export const findAllActivities = () => fetch(ACTIVITIES_URL).then(response => response.json());

export const findAllActivitiesForEducation = (educationId) => fetch(`${EDUCATIONS_URL}/${educationId}/activities`).then(response => response.json());

export const findActivityById = (id) => fetch(`${ACTIVITIES_URL}/${id}`).then(response => response.json());

export const deleteActivity = (id) => fetch(`${ACTIVITIES_URL}/${id}`, {method: "DELETE"});

export const createActivity = (activity) => fetch(ACTIVITIES_URL,
    {method: "POST",
        body: JSON.stringify(activity),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const createActivityForEducation = (educationId, activity) => fetch(`${EDUCATIONS_URL}/${educationId}/activities`,
    {method: "POST",
        body: JSON.stringify(activity),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const updateActivity = (id, activity) => fetch(`${ACTIVITIES_URL}/${id}`,
    {method: "PUT",
        body: JSON.stringify(activity),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export default {
    findAllActivities,
    findAllActivitiesForEducation,
    findActivityById,
    deleteActivity,
    createActivity,
    createActivityForEducation,
    updateActivity
}
