export default function ProfileBox({title, Logo, link}){
    return(
        <a href={link} target="_blank">
            <div className="profile-box">
                <Logo className="profile-logo"/>
                <h3>{title}</h3>
            </div>
        </a>
    )
}