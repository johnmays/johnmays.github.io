export default function ProfileBox({title, Logo}){
    return(
        <div className="profile-box">
            <Logo className="profile-logo"/>
            <h3>{title}</h3>
        </div>
    )
}