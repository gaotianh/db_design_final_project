const EDUCATIONS_URL = "http://localhost:8080/api/educations"
const USERS_URL = "http://localhost:8080/api/users"

export const findAllEducations = () => fetch(EDUCATIONS_URL).then(response => response.json());

export const findAllEducationsForUser = (userId) => fetch(`${USERS_URL}/${userId}/educations`).then(response => response.json());

export const findEducationById = (id) => fetch(`${EDUCATIONS_URL}/${id}`).then(response => response.json());

export const deleteEducation = (id) => fetch(`${EDUCATIONS_URL}/${id}`, {method: "DELETE"});

export const createEducation = (education) => fetch(EDUCATIONS_URL,
    {method: "POST",
        body: JSON.stringify(education),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const createEducationForUser = (userId, education) => fetch(`${USERS_URL}/${userId}/educations`,
    {method: "POST",
        body: JSON.stringify(education),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export const updateEducation = (id, education) => fetch(`${EDUCATIONS_URL}/${id}`,
    {method: "PUT",
        body: JSON.stringify(education),
        headers: {'content-type':'application/json'}}).then(response => response.json());

export default {
    findAllEducations,
    findAllEducationsForUser,
    findEducationById,
    deleteEducation,
    createEducation,
    createEducationForUser,
    updateEducation
}
