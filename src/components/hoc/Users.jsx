//@ts-nocheck
import HigherOrder from './HigherOrder';

function Users({data}) {
  return (
    <>
      
      {data.map((user, index) => {
        return <div key={index}>{user.name}</div>;
      })}
    </>
  );
}

const UserComp = HigherOrder("Users", Users, "users");
export default UserComp;
