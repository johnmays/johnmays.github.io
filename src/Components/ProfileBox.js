export default function ProfileBox(siteLogo, siteTitle, altText){
    return(
        <div className="profile-box">
            <img src={siteLogo} alt={altText}/>
            <h3>{siteTitle}</h3>
        </div>
    )
}