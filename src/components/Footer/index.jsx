import LogoHeader from "../../assets/logo-site.svg"
import PlayStore from "../../assets/play-store.png";
import AppStore from "../../assets/app-store.png";
import LogoFacebookPng from "../../assets/icon-facebook.png";
import LogoInstagramPng from "../../assets/icon-instagram.png";

const Footer = () => {
    return ( <>
        <footer className="secao container p-5">
        
        <div className="secao-rodape row d-flex" >
            <div className="col-sm-12 col-xxl-2">
                <img src={LogoHeader} alt="logo medeiros" className="logo-rodape"/>
            </div>

            <div className="col-xxl-2 coluna-footer">
                <h4 class="titulos-footer">Informações</h4>
                <div class="coluna-footer--opcoes">

                    <a href="./index.html">
                        <p>Home</p>
                    </a>
                    <a href="./ofertas.html">
                        <p>Ofertas</p>
                    </a>
                    <a href="./sobre.html">
                        <p>Sobre nós</p>
                    </a>
                    <a href="./lojas.html">
                        <p>Nossas lojas</p>
                    </a>
                    <a href="./sobre.html">
                        <p>Ação social</p>
                    </a>
                    <a href="./trabalhe_conosco.html">
                        <p>Trabalhe conosco</p>
                    </a>
                    <a href="./trabalhe_conosco.html">
                        <p>Fale conosco</p>
                    </a>
                    <a href="./politica-de-privacidade.html">
                        <p>Política e privacidade</p>
                    </a>
                </div>
            </div>


            <div className="col-xxl-2 coluna-footer">
                <h4 className="titulos-footer">Formas de pagamento</h4>
            </div>


            <div className="col-xxl-2 coluna-footer">
                <h4 class="titulos-footer">Atendimento ao cliente</h4>
                <p>(85) 3291-2233</p>
            </div>


            <div className="col-xxl-2 coluna-footer">
                <div class="coluna-footer">
                    <h4 class="titulos-footer">Acompanhe nossos canais</h4>
                    <div>
                        <a href="https://www.facebook.com/medeirossupermercados/" target="_blank"><img src={LogoFacebookPng} alt="logo facebook" class="logo-redes-sociais-footer"/></a>
                        <a href="https://www.instagram.com/medeirossupermercados/" target="_blank"><img src={LogoInstagramPng} alt="logo instagram" className="logo-redes-sociais-footer"/></a>
                    </div>
                </div>
                <div class="coluna-footer">
                    <h4 class="titulos-footer">Compre sem sair de casa</h4>
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

    <div class="rodape-copyright">
        <p>© 2024 Mercantil Medeiros LTDA. Todos os Direitos Reservados.  
            Desenvolvido por Francisco Rodrigues.</p>
    </div>
    </> );
}
 
export default Footer;
