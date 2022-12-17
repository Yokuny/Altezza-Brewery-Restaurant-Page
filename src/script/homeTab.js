import "../css/homeTab.css";
import logoCompleta from "../picture/logo_altezza_completa.png";
import homeBackgroundVideo from "../picture/banner_altezza.mp4";
export default function homeTab() {
  const videoContent = document.createElement("main");
  videoContent.classList.add("videoContent");
  const mainVideoContent = document.createElement("div");
  mainVideoContent.classList.add("mainVideoContent");
  const videoElement = document.createElement("video");
  videoElement.src = homeBackgroundVideo;
  videoElement.autoplay = "true";
  videoElement.muted = "true";
  videoElement.loop = "true";
  mainVideoContent.appendChild(videoElement);
  const mainTitleContent = document.createElement("div");
  mainTitleContent.classList.add("mainTitleContent");
  const titleContent = document.createElement("div");
  titleContent.classList.add("titleContent");
  const imgLogoCompleta = document.createElement("img");
  imgLogoCompleta.src = logoCompleta;
  const mainTitleH1 = document.createElement("h1");
  mainTitleH1.textContent = "A Primeira Cervejaria Artesanal das Montanhas Capixaba";
  const mainP = document.createElement("p");
  mainP.textContent =
    "Uma das melhores cerveja artesanal das Montanhas Capixaba conta também com uma área para eventos, restaurante e pousada, você também pode estar contratando nosso espaço para realização dos seus eventos.";
  const mainButton = document.createElement("button");
  mainButton.textContent = "Entre em contato";
  titleContent.appendChild(imgLogoCompleta);
  titleContent.appendChild(mainTitleH1);
  titleContent.appendChild(mainP);
  titleContent.appendChild(mainButton);
  mainTitleContent.appendChild(titleContent);
  videoContent.appendChild(mainVideoContent);
  videoContent.appendChild(mainTitleContent);
  /*
    <main class="videoContent">
        <div class="mainVideoContent">
            <video autoplay="" muted="" loop="" playsinline="" src="./9d535ae85bb8438a9155.mp4" data-object-fit="cover"></video>
        </div>
        <div class="mainTitleContent">
            <div class="titleContent">
                <img src="../src/logo_altezza_completa.png" alt="">
                <h1>A Primeira Cervejaria Artesanal das Montanhas Capixaba</h1>
                <p>Uma das melhores cerveja artesanal das Montanhas Capixaba conta também com uma área para eventos, restaurante e pousada, você também pode estar contratando nosso espaço para realização dos seus eventos.</p>
                <button disabled="disabled">Entre em contato</button>
            </div>
        </div>
    </main>
    */
  return videoContent;
}
