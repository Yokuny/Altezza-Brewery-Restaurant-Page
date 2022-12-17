import homeTab from "./homeTab.js";
import "../css/restaurantTab.css";
import restaurantTab from "./restaurantTab.js";
import "../css/headerBar.css";
import pousadasTab from "./pousadasTab.js";
import "../css/pousadasTab.css";
import headerLogoImg from "../picture/altezza icon.png";
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
  homeLinkElement.addEventListener("click", changeToHome);
  headerLinks.appendChild(homeLinkElement);
  const restauranteLinkElement = document.createElement("a");
  restauranteLinkElement.textContent = "Restaurante";
  restauranteLinkElement.addEventListener("click", changeToRestaurante);
  headerLinks.appendChild(restauranteLinkElement);
  const pousadasLinkElement = document.createElement("a");
  pousadasLinkElement.textContent = "Pousadas";
  pousadasLinkElement.addEventListener("click", changeToPousadas);
  headerLinks.appendChild(pousadasLinkElement);
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
                </div>
            </div>
        </div>
    </header>
    */
  return pageHeaderBarBackground;
}
function changeToHome() {
  document.body.innerHTML = " ";
  document.body.append(restaurantHeader());
  document.body.append(homeTab());
}
function changeToRestaurante() {
  document.body.innerHTML = " ";
  document.body.append(restaurantHeader());
  document.body.append(restaurantTab());
}
function changeToPousadas() {
  document.body.innerHTML = " ";
  document.body.append(restaurantHeader());
  document.body.append(pousadasTab());
}
