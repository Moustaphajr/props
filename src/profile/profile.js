const Profile = (props) => {
    return ( 
        <div>
            <div class="card">
                <div class="card-body">
                   fullname: {props.fullName}
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                   bio: {props.bio}
                </div>
                <div class="card-body">
                   profession: {props.profession}
                   <h1>{props.children}</h1>

                </div>
                
            </div>
        </div>
     );
}
 
export default Profile;