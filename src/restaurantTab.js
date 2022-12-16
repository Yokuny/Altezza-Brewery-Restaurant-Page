import "./restaurantTab.css.css";
import garcomImagem from "./restaurante-garcom.jpg";

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
}
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
