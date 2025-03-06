import LogoHeader from "../../assets/logo-site.svg"

const Header = () => {
    return ( <div className="custom-dark-green">
        <div className="container py-3">
            <img src={LogoHeader} alt="logo-header" />
        </div>
    </div> );
}
 
export default Header;