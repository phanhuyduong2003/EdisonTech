import {createBrowserRouter} from "react-router-dom";
import PrivateGroup from "./PrivateGroup";
import ProtectedGroup from "./ProtectedGroup";
import UserProfile from "./UserProfile";
const router = createBrowserRouter([
  {
    path: "/private-group",
    element: (
      <ProtectedGroup isMember={false}>
        <PrivateGroup />
      </ProtectedGroup>
    ),
  },
  {
    path: '/user/:userId',
    element:  <UserProfile/>
  }
]);
export default router;
