import PropTypes from "prop-types";
const Profile = ({fullName,bio,profession,children}) => {
    return ( 
        <div>
            <div class="card">
                <div class="card-body">
                   fullname: {fullName}
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                   bio: {bio}
                </div>
                <div class="card-body">
                   profession: {profession}
                   <h1>{children}</h1>

                </div>
         
                
            </div>
        </div>
     );

}

Profile.defaultProps={
    fullName:"Moussa",
    bio:"dév mobile",
    profession:"informaticien"
}

Profile.propTypes={
    fullName: propTypes.string,
}
 
export default Profile;