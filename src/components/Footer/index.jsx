import LogoHeader from "../../assets/logo-site.svg"
import PlayStore from "../../assets/play-store.png";
import AppStore from "../../assets/app-store.png";
import LogoFacebookPng from "../../assets/icon-facebook.png";
import LogoInstagramPng from "../../assets/icon-instagram.png";
import bandeiraCartao from "../../assets/cartoes.png"
import AleloLogo from "../../assets/alelo-logo.png";
import BenVisaVale from "../../assets/ben-visa-vale.png";
import BsCash from "../../assets/bscash.png";
import Cielo from "../../assets/cielo.png";
import FortBrasil from "../../assets/fort-brasil-dm.png";
import GreenCard from "../../assets/greencard.png";
import Libercard from "../../assets/libercard.png";
import Mastercard from "../../assets/mastercard.png";
import Pagseguro from "../../assets/Logonovo_pagseguro-cinza.png";
import Nutricash from "../../assets/nutricash.png";
import PersonalCard from "../../assets/personalcard.webp";
import Sodexo from "../../assets/sodexo.png";
import TicketLogo from "../../assets/ticket-logo-5.png";
import Tricad from "../../assets/tricard.png";
import Up from "../../assets/up.png";
import Uze from "../../assets/uze-logo.jpeg";
import ValeCard from "../../assets/vale-card.png";
import ValeShop from "../../assets/vale-shop.png";
import VisaEletron from "../../assets/Visa_Electron.png";
import VrAlimentacao from "../../assets/VR-Alimentação.png";



const Footer = () => {
    return ( <>
        <div className="custom-more-dark-green">
            <footer className="secao container p-5">
            
            <div className="secao-rodape row d-flex" >
                <div className="col-sm-12 col-xxl-2">
                    <img src={LogoHeader} alt="logo medeiros" className="logo-rodape"/>
                </div>
                <div className="col-xxl-2 coluna-footer">
                    <h4 class="titulos-footer">Informações</h4>

                    <div className="coluna-footer--opcoes">
                        <div><a className="coluna-footer--opcoes" href="/">Home</a></div>
                        <div><a className="coluna-footer--opcoes" href="/ofertas">Ofertas</a></div>
                        <div><a className="coluna-footer--opcoes" href="/sobre">Sobre nós</a></div>
                        <div><a className="coluna-footer--opcoes" href="/lojas">Nossas Lojas</a></div>
                        <div><a className="coluna-footer--opcoes" href="/">Ação Social</a></div>
                        <div><a className="coluna-footer--opcoes" href="/trabalhe_conosco">Trabalhe conosco</a></div>
                        <div><a className="coluna-footer--opcoes" href="/">Fale Conosco</a></div>


                       
                    </div>
                </div>
                <div className="col-xxl-2 coluna-footer">
                    <h4 className="titulos-footer">Formas de pagamento:</h4>
                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                        <img className="logo-bandeira" src={AleloLogo} alt="alelo" />
                        <img className="logo-bandeira" src={BenVisaVale} alt="ben visa vale" />
                        <img className="logo-bandeira" src={BsCash} alt="bscash" />
                        <img className="logo-bandeira" src={Cielo} alt="cielo" />
                        <img className="logo-bandeira" src={FortBrasil} alt="fort brasil" />
                        <img className="logo-bandeira" src={GreenCard} alt="green card" />
                        <img className="logo-bandeira" src={Libercard} alt="libercard" />
                        <img className="logo-bandeira" src={Mastercard} alt="mastercard" />
                        <img className="logo-bandeira" src={Pagseguro} alt="pagseguro" />
                        <img className="logo-bandeira" src={Nutricash} alt="nutricash" />
                        <img className="logo-bandeira" src={PersonalCard} alt="personal card" />
                        <img className="logo-bandeira" src={Sodexo} alt="sodexo" />
                        <img className="logo-bandeira" src={TicketLogo} alt="ticket" />
                        <img className="logo-bandeira" src={Tricad} alt="tricard" />
                        <img className="logo-bandeira" src={Up} alt="up" />
                        <img className="logo-bandeira" src={Uze} alt="uze" />
                        <img className="logo-bandeira" src={ValeCard} alt="vale card" />
                        <img className="logo-bandeira" src={ValeShop} alt="vale shop" />
                        <img className="logo-bandeira" src={VisaEletron} alt="visa eletron" />
                        <img className="logo-bandeira" src={VrAlimentacao} alt="vr alimentacao" />
                    </div>
                </div>
                <div className="col-xxl-2 coluna-footer">
                    <h4 className="titulos-footer">Atendimento ao cliente:</h4>
                    <div className="footer-contato-tel">
                        <p>(85) 3291-2233</p>
                        <p>Loja 01-(85) 9 9159-2951</p>
                        <p>Loja 02-(85) 9 9158-8829</p>
                        <p>Loja 03-(85) 9 8166-0326</p>
                        <p>Loja 04-(85) 9 8192-2785</p>
                    </div>
                </div>
                <div className="col-xxl-2 coluna-footer">
                    <div className="coluna-footer">
                        <h4 className="titulos-footer">Acompanhe nossos canais:</h4>
                        <div>
                            <a href="https://www.facebook.com/medeirossupermercados/" target="_blank"><img src={LogoFacebookPng} alt="logo facebook" className="logo-redes-sociais-footer"/></a>
                            <a href="https://www.instagram.com/medeirossupermercados/" target="_blank"><img src={LogoInstagramPng} alt="logo instagram" className="logo-redes-sociais-footer"/></a>
                        </div>
                    </div>
                    <div class="coluna-footer">
                        <h4 class="titulos-footer">Compre sem sair de casa:</h4>
                        <div class="logo-app-footer">
                            <a href="https://play.google.com/store/apps/details?id=mercadapp.fgl.com.medeiros&hl=pt_BR">
                            <img className="botao-store img-logo-app" src={PlayStore} alt="play store"  target="_blank"/></a>
                            <a
                              href="https://apps.apple.com/br/app/medeiros/id1383747653"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={AppStore}
                                alt="app store"
                                className="img-logo-app"
                              />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
                </footer>
        </div>

    <div class="rodape-copyright">
        <p>© 2024 Mercantil Medeiros LTDA. Todos os Direitos Reservados.  
            Desenvolvido por <a className="link-copyright" href="https://franciscojose96.github.io/MyPortfolio/">Francisco Rodrigues</a>.</p>
    </div>
    </> );
}
 
export default Footer;
