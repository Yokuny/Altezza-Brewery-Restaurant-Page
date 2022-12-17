import "../css/restaurantTab.css";
import garcomImagem from "../picture/restaurante-garcom.jpg";
import menuCardBackground from "../picture/card-restaurante.jpg";
export default function homeTab() {
  const restaurantTabContent = document.createElement("div");
  restaurantTabContent.classList.add("restaurantTabContent");
  const restaurantCardSizing = document.createElement("div");
  restaurantCardSizing.classList.add("restaurantCardSizing");
  const restauranteImagemSizing = document.createElement("div");
  restauranteImagemSizing.classList.add("restauranteImagemSizing");
  const restauranteGarcomImg = document.createElement("img");
  restauranteGarcomImg.src = garcomImagem;
  restauranteImagemSizing.appendChild(restauranteGarcomImg);
  const restaurantInfoIntro = document.createElement("div");
  restaurantInfoIntro.classList.add("restaurantInfoIntro");
  const restaurantInfoH1 = document.createElement("h1");
  restaurantInfoH1.textContent = "Seja bem-vindo ao Espaço Via Olivari";
  const restaurantInfoH4 = document.createElement("h4");
  restaurantInfoH4.textContent = "Restaurante Altezza";
  const restaurantInfoP1 = document.createElement("p");
  restaurantInfoP1.textContent = `Nosso serviço atende até 150 pessoas “à la carte” e muitos mais em eventos como casamentos, aniversários, encontros empresariais, ou simplesmente um encontro entre amigos. O Chef Enrico elaborará um cardápio perfeito para agradar o seu paladar!`;
  const restaurantInfoP2 = document.createElement("p");
  restaurantInfoP2.textContent = `Como outra proposta, reservando-se com antecedência, poderá ser encomendada a famosa paella ou fideuá de mariscos do nosso Chef, preparada em sua presença.`;
  const restaurantInfoP3 = document.createElement("p");
  restaurantInfoP3.textContent = `Estamos localizados em um genuíno casarão colonial, elegante e informal, com vista para uma linda paisagem das Montanhas da Serra do Castelo-ES. Junto à entrada um pequeno empório faz vitrine de produtos da casa e de produtores artesanais da região.`;
  restaurantInfoIntro.appendChild(restaurantInfoH1);
  restaurantInfoIntro.appendChild(restaurantInfoH4);
  restaurantInfoIntro.appendChild(restaurantInfoP1);
  restaurantInfoIntro.appendChild(restaurantInfoP2);
  restaurantInfoIntro.appendChild(restaurantInfoP3);
  restaurantCardSizing.appendChild(restauranteImagemSizing);
  restaurantCardSizing.appendChild(restaurantInfoIntro);
  const secondLineOfCards = document.createElement("div");
  secondLineOfCards.classList.add("restaurantCardSizing");
  const menuCardInfo = document.createElement("div");
  menuCardInfo.classList.add("menuCardInfo");
  const h1SideCardInfo = document.createElement("h1");
  h1SideCardInfo.textContent = "Nosso Cardápio";
  const h4SideCardInfo = document.createElement("h4");
  h4SideCardInfo.textContent = `Uma variedade de sabores e experiências com o que há de melhor na culinária italiana.`;
  menuCardInfo.appendChild(h1SideCardInfo);
  menuCardInfo.appendChild(h4SideCardInfo);
  secondLineOfCards.appendChild(menuCardInfo);
  const menuCardAcess = document.createElement("div");
  menuCardAcess.classList.add("restauranteImagemSizing");
  const menuCardImg = document.createElement("img");
  menuCardImg.src = menuCardBackground;
  menuCardImg.classList.add("menuBackgroundSize");
  menuCardAcess.appendChild(menuCardImg);
  const menuCardAcessInfos = document.createElement("div");
  menuCardAcessInfos.classList.add("menuFloatingInfos");
  const menuCardAcessInfosP = document.createElement("p");
  menuCardAcessInfosP.textContent = "Cardápio";
  const menuCardAcessInfosh4 = document.createElement("h4");
  menuCardAcessInfosh4.textContent = "Restaurante Via Olivari";
  const menuCardAcessInfosButton = document.createElement("button");
  menuCardAcessInfosButton.textContent = "Restaurante Via Olivari";
  menuCardAcessInfos.appendChild(menuCardAcessInfosP);
  menuCardAcessInfos.appendChild(menuCardAcessInfosh4);
  menuCardAcessInfos.appendChild(menuCardAcessInfosButton);
  menuCardAcess.appendChild(menuCardAcessInfos);
  secondLineOfCards.appendChild(menuCardAcess);
  restaurantTabContent.appendChild(restaurantCardSizing);
  restaurantTabContent.appendChild(secondLineOfCards);
  /*
  <div class="restaurantTabContent">
      <div class="restaurantCardSizing">
          <div class="restauranteImagemSizing">
              <img src="../src/restaurante-garcom.jpg" alt="">
          </div>
          <div class="restaurantInfoIntro">
              <h1>Seja bem-vindo ao Espaço Via Olivari</h1>
              <h4>Restaurante Altezza</h4>
              <p>Nosso serviço atende até 150 pessoas “à la carte” e muitos mais em eventos como casamentos, aniversários, encontros empresariais, ou simplesmente um encontro entre amigos. O Chef Enrico elaborará um cardápio perfeito para agradar o seu paladar!</p>
              <p>Como outra proposta, reservando-se com antecedência, poderá ser encomendada a famosa paella ou fideuá de mariscos do nosso Chef, preparada em sua presença.</p>
              <p>Estamos localizados em um genuíno casarão colonial, elegante e informal, com vista para uma linda paisagem das Montanhas da Serra do Castelo-ES. Junto à entrada um pequeno empório faz vitrine de produtos da casa e de produtores artesanais da região.</p>
          </div>
      </div>
      <div class="restaurantCardSizing">
          <div class="menuCardInfo">
              <h1>Nosso Cardápio</h1>
              <h4>Uma variedade de sabores e experiências com o que há de melhor na culinária italiana.</h4>
          </div>
          <div class="restauranteImagemSizing">
              <img class="menuBackgroundSize" src="../src/card restaurante.jpg" alt="">
              <div class="menuFloatingInfos">
                  <p>Cardápio</p>
                  <h4>Restaurante Via Olivari</h4>
                  <button disabled="disabled">Acesse agora ></button>
              </div>
          </div>
      </div>
  </div>
  */
  return restaurantTabContent;
}
