import "../css/pousadasTab.css";
import logoCompleta from "../picture/logo_altezza_completa.png";
import fornogrande from "../picture/fornogrande.jpg";
import cevada from "../picture/cevada.png";
import aImg1 from "../picture/imagemSuite1.jpg";
import aImg2 from "../picture/imagemSuite2.jpg";
import aImg3 from "../picture/imagemSuite3.jpg";
import aImg4 from "../picture/imagemSuite4.jpg";
import aImg5 from "../picture/imagemSuite5.jpg";
import aImg6 from "../picture/imagemSuite6.jpg";
export default function pousadasTab() {
  const pousadasTab = document.createElement("div");
  pousadasTab.classList.add("restaurantTab");
  const pousadasTabFirstLogo = document.createElement("div");
  pousadasTabFirstLogo.classList.add("restaurantTabFirstLogo");
  const pousadasTabFirstLogoImg = document.createElement("img");
  pousadasTabFirstLogoImg.src = logoCompleta;
  pousadasTabFirstLogo.appendChild(pousadasTabFirstLogoImg);
  const firstInfoIntro = document.createElement("div");
  firstInfoIntro.classList.add("firstInfoIntro");
  const firstInfoIntroH4 = document.createElement("h4");
  firstInfoIntroH4.textContent =
    "Cuidadosamente decorada proporcionando conforto e sofisticação. Essa suíte perfeita para casal e um banheiro amplo.";
  firstInfoIntro.appendChild(firstInfoIntroH4);
  const placeInfoIntro = document.createElement("div");
  placeInfoIntro.classList.add("placeInfoIntro");
  const placeIntroImg = document.createElement("div");
  placeIntroImg.classList.add("placeIntroImg");
  const placeInfoIntroImg = document.createElement("img");
  placeInfoIntroImg.src = fornogrande;
  placeIntroImg.appendChild(placeInfoIntroImg);
  const placeInfoText = document.createElement("div");
  placeInfoText.classList.add("placeInfoText");
  const placeInfoTextH2 = document.createElement("h2");
  placeInfoTextH2.textContent = "Comodidades do Apartamento";
  placeInfoText.appendChild(placeInfoTextH2);
  const placeInfoTextUl = document.createElement("ul");
  const placeInfoTextLi1 = document.createElement("li");
  placeInfoTextLi1.textContent = "Cama de casal";
  placeInfoTextUl.appendChild(placeInfoTextLi1);
  const placeInfoTextLi2 = document.createElement("li");
  placeInfoTextLi2.textContent = "4 Travesseiros";
  placeInfoTextUl.appendChild(placeInfoTextLi2);
  const placeInfoTextLi3 = document.createElement("li");
  placeInfoTextLi3.textContent = "2 Toalhas de banho";
  placeInfoTextUl.appendChild(placeInfoTextLi3);
  const placeInfoTextLi4 = document.createElement("li");
  placeInfoTextLi4.textContent = "2 Toalhas de rosto";
  placeInfoTextUl.appendChild(placeInfoTextLi4);
  const placeInfoTextLi5 = document.createElement("li");
  placeInfoTextLi5.textContent = "Água quente";
  placeInfoTextUl.appendChild(placeInfoTextLi5);
  const placeInfoTextLi6 = document.createElement("li");
  placeInfoTextLi6.textContent = "Aquecedor de toalhas";
  placeInfoTextUl.appendChild(placeInfoTextLi6);
  const placeInfoTextLi7 = document.createElement("li");
  placeInfoTextLi7.textContent = "Secador de cabelo";
  placeInfoTextUl.appendChild(placeInfoTextLi7);
  const placeInfoTextLi8 = document.createElement("li");
  placeInfoTextLi8.textContent = "Guarda roupas";
  placeInfoTextUl.appendChild(placeInfoTextLi8);
  const placeInfoTextLi9 = document.createElement("li");
  placeInfoTextLi9.textContent = "Estante com cadeira";
  placeInfoTextUl.appendChild(placeInfoTextLi9);
  placeInfoText.appendChild(placeInfoTextUl);
  placeInfoIntro.appendChild(placeIntroImg);
  placeInfoIntro.appendChild(placeInfoText);
  const midleTitle = document.createElement("div");
  midleTitle.classList.add("midleTitle");
  const midleTitleH2 = document.createElement("h2");
  midleTitleH2.textContent = "Imagens da Suíte Pérola Negra";
  const midleTitleImg = document.createElement("img");
  midleTitleImg.src = cevada;
  midleTitle.appendChild(midleTitleH2);
  midleTitle.appendChild(midleTitleImg);
  const pousadaPicturesSize = document.createElement("div");
  pousadaPicturesSize.classList.add("pousadaPicturesSize");
  const pousadaPicturesGrid = document.createElement("div");
  pousadaPicturesGrid.classList.add("pousadaPicturesGrid");
  const a1 = document.createElement("div");
  a1.classList.add("a1");
  const a1Img = document.createElement("img");
  a1Img.src = aImg1;
  a1.appendChild(a1Img);
  pousadaPicturesGrid.appendChild(a1);
  const a2 = document.createElement("div");
  a2.classList.add("a2");
  const a2Img = document.createElement("img");
  a2Img.src = aImg2;
  a2.appendChild(a2Img);
  pousadaPicturesGrid.appendChild(a2);
  const a3 = document.createElement("div");
  a3.classList.add("a3");
  const a3Img = document.createElement("img");
  a3Img.src = aImg3;
  a3.appendChild(a3Img);
  pousadaPicturesGrid.appendChild(a3);
  const a4 = document.createElement("div");
  a4.classList.add("a4");
  const a4Img = document.createElement("img");
  a4Img.src = aImg4;
  a4.appendChild(a4Img);
  pousadaPicturesGrid.appendChild(a4);
  const a5 = document.createElement("div");
  a5.classList.add("a5");
  const a5Img = document.createElement("img");
  a5Img.src = aImg5;
  a5.appendChild(a5Img);
  pousadaPicturesGrid.appendChild(a5);
  const a6 = document.createElement("div");
  a6.classList.add("a6");
  const a6Img = document.createElement("img");
  a6Img.src = aImg6;
  a6.appendChild(a6Img);
  pousadaPicturesGrid.appendChild(a6);
  pousadaPicturesSize.appendChild(pousadaPicturesGrid);
  pousadasTab.appendChild(pousadasTabFirstLogo);
  pousadasTab.appendChild(firstInfoIntro);
  pousadasTab.appendChild(placeInfoIntro);
  pousadasTab.appendChild(midleTitle);
  pousadasTab.appendChild(pousadaPicturesSize);
  /*
    <div class="restaurantTab">
        <div class="restaurantTabFirstLogo">
            <img src="../src/picture/logo_altezza_completa.png" alt="">
        </div>
        <div class="firstInfoIntro">
            <h4>Cuidadosamente decorada proporcionando conforto e sofisticação. Essa suíte perfeita para casal e um banheiro amplo.
            </h4>
        </div>
        <div class="placeInfoIntro">
            <div class="placeIntroImg">
                <img src="../src/picture/fornogrande.jpg" alt="">
            </div>
            <div class="placeInfoText">
                <h2>Comodidades do Apartamento</h2>
                <ul>
                    <li>Cama de casal</li>
                    <li>4 Travesseiros</li>
                    <li>2 Toalhas de banho</li>
                    <li>2 Toalhas de rosto</li>
                    <li>Água quente</li>
                    <li>Aquecedor de toalhas</li>
                    <li>Secador de cabelo</li>
                    <li>Guarda roupas</li>
                    <li>Estante com cadeira</li>
                </ul>
            </div>
        </div>
        <div class="midleTitle">
            <h2>Imagens da Suíte Pérola Negra</h2>
            <img src="../src/picture/cevada.png" alt="">
        </div>
        <div class="pousadaPicturesSize">
            <div class="pousadaPicturesGrid">
                <div class="a1"><img src="../src/picture/imagemSuite1.jpg" alt="" sizes="" srcset=""></div>
                <div class="a2"><img src="../src/picture/imagemSuite2.jpg" alt="" sizes="" srcset=""></div>
                <div class="a3"><img src="../src/picture/imagemSuite3.jpg" alt="" sizes="" srcset=""></div>
                <div class="a4"><img src="../src/picture/imagemSuite4.jpg" alt="" sizes="" srcset=""></div>
                <div class="a5"><img src="../src/picture/imagemSuite5.jpg" alt="" sizes="" srcset=""></div>
                <div class="a6"><img src="../src/picture/imagemSuite6.jpg" alt="" sizes="" srcset=""></div>
            </div>
        </div>
    </div>
*/
  return pousadasTab;
}
