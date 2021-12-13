import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import EducationList from "./educations/education-list";
import EducationFormEditor from "./educations/education-form-editor";
import ActivityList from "./activities/activity-list";
import ActivityFormEditor from "./activities/activity-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
                <Route path="/users/:userId/educations" exact={true}>
                    <EducationList/>
                </Route>
                <Route path="/users/:userId/educations/:id" exact={true}>
                    <EducationFormEditor/>
                </Route>
                <Route path="/users/:userId/educations/:educationId/activities" exact={true}>
                    <ActivityList/>
                </Route>
                <Route path="/users/:userId/educations/:educationId/activities/:id" exact={true}>
                    <ActivityFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
