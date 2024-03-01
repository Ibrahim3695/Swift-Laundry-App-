import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"
import "./Test.css"
import { IoMdArrowRoundBack } from "react-icons/io"
const BusinessP = () => {

    const navigate = useNavigate()
  const navigateToShop = () =>{
    navigate("/signup")
  }
    const navigat = useNavigate()
  const navigateToBusiness = () =>{
    navigat("/registerSignup")
  }


  
  const navigateToHome = () => {
    navigate("/")
  }


    return (
        <>
            <div className="businessPage">
                <div className="login_card">
                    <div className="login_cardWrapper">
                        <header className="login_cardHeader">
                            <p>Sign in As ?</p>
                        </header>
                        <div className="login_cardContainer">
                        <div className="login_cardLeft">
                            <h1>Customer  </h1>
                            <button className="login_cardBtn" onClick={navigateToShop}>Sign Up As User</button>
                        </div>
                        <div className="login_cardRight">
                            <h1> Business </h1>
                            <button className="login_cardBtn" onClick={navigateToBusiness}>Sign Up Business Owner</button>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div onClick={navigateToHome} className="back_icon">
        <IoMdArrowRoundBack size={30} />
      </div>
        </>
    )
}
export default BusinessP