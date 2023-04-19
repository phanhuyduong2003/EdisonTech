import { useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>Profile of User (ID = {userId})</div>;
};
export default UserProfile;
