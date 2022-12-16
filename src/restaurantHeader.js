import "./headerBar.css";
import headerLogoImg from "./altezza icon.png";
export default function restaurantHeader() {
  const pageHeaderBarBackground = document.createElement("header");
  pageHeaderBarBackground.classList.add("pageHeaderBarBackground");
  const pageHeaderBar = document.createElement("div");
  pageHeaderBar.classList.add("pageHeaderBar");
  const headerContentBarSize = document.createElement("div");
  headerContentBarSize.classList.add("headerContentBarSize");
  const headerLogo = document.createElement("img");
  headerLogo.src = headerLogoImg;
  headerContentBarSize.appendChild(headerLogo);
  const headerLinks = document.createElement("div");
  headerLinks.classList.add("headerLinks");
  const homeLinkElement = document.createElement("a");
  homeLinkElement.textContent = "Home";
  headerLinks.appendChild(homeLinkElement);
  const restauranteLinkElement = document.createElement("a");
  restauranteLinkElement.textContent = "Restaurante";
  headerLinks.appendChild(restauranteLinkElement);
  const pousadasLinkElement = document.createElement("a");
  pousadasLinkElement.textContent = "Pousadas";
  headerLinks.appendChild(pousadasLinkElement);
  const contatoLinkElement = document.createElement("a");
  contatoLinkElement.textContent = "Contato";
  headerLinks.appendChild(contatoLinkElement);
  headerContentBarSize.appendChild(headerLinks);
  pageHeaderBar.appendChild(headerContentBarSize);
  pageHeaderBarBackground.appendChild(pageHeaderBar);
  /*
    <header class="pageHeaderBarBackground">
        <div class="pageHeaderBar">
            <div class="headerContentBarSize">
                <img src="../src/altezza icon.png" alt="">
                <div class="headerLinks">
                    <a>Home</a>
                    <a>Restaurante</a>
                    <a>Pousadas</a>
                    <a>Contato</a>
                </div>
            </div>
        </div>
    </header>
    */
  return pageHeaderBarBackground;
}
