import rayzorImage from "../../assets/personagens/Capitão Rayzor.png";
import novaImage from "../../assets/personagens/Dr.a Nova.png";
import argoImage from "../../assets/personagens/Argo, O Executor.png";
import nyraImage from "../../assets/personagens/Nyra, A Tecno-Mística.png";
import zedImage from "../../assets/personagens/Zed, O Engenheiro Louco.png";
import rexImage from "../../assets/personagens/Rex, o Último Guardião.png";

import rayzorNaveImage from "../../assets/naves/Capitão Rayzor.png";
import novaNaveImage from "../../assets/naves/Dra. Nova.png";
import argoNaveImage from "../../assets/naves/Argo, o Executor.png";
import nyraNaveImage from "../../assets/naves/Nyra, A Tecno-Mística.png";
import zedNaveImage from "../../assets/naves/Zed, O Engenheiro Louco.png";
import rexNaveImage from "../../assets/naves/rex.png";

export interface Character {
  id: string;
  name: string;
  image: string;
  shipImage: string;
  classType: string;
  front: string;
  back: string;
  lore?: string;
  ship?: string;
  special?: string;
  passive?: string;
  style?: string;
  quote?: string;
}

export const characters: Character[] = [
  {
    id: "rayzor",
    name: "Capitão Rayzor",
    image: rayzorImage,
    shipImage: rayzorNaveImage,
    classType: "Comandante",
    front: "Líder tático da última frota de Arkanis.",
    back: "Rayzor domina o campo com drones de combate, precisão e estratégias infalíveis.",
    lore: "Um veterano da frota estelar, Rayzor é conhecido por sua precisão letal e nervos de aço. Seu passado é envolto em segredos de guerras galácticas.",
    ship: "Starblade MK-II",
    special:
      "Laser Penetrante – Dispara feixes retos que atravessam múltiplos inimigos. Boa cadência e alcance médio.",
    passive:
      "Tiro de Elite – +10% de chance de acerto crítico (2x dano). Críticos têm chance de causar sangramento (dano contínuo).",
    style:
      "Balanceado, com foco em dano preciso e controle de multidão linear.",
    quote: "Mire. Respire. Elimine.",
  },
  {
    id: "nova",
    name: "Dr.a Nova",
    image: novaImage,
    shipImage: novaNaveImage,
    classType: "Cientista",
    front: "Especialista em manipulação quântica.",
    back: "Cria campos gravitacionais e armas de partícula instáveis.",
    lore: "Uma ex-pesquisadora de bioengenharia da Confederação Estelar, agora luta pela vida usando sua própria criação: drones curadores e tecnologias de suporte.",
    ship: "Aurora Vita",
    special:
      "Drone Médico – Cura passiva de 2 HP/s e pulsos curativos para aliados (modo co-op).",
    passive:
      "Cascata de Energia – Ao pegar um power-up, todos os cooldowns são reduzidos em 50% por 5 segundos.",
    style: "Suporte e sobrevivência, ideal para jogadores estratégicos.",
    quote: "Curar é resistir. Resistir é vencer.",
  },
  {
    id: "argo",
    name: "Argo, O Executor",
    image: argoImage,
    shipImage: argoNaveImage,
    classType: "Tank",
    front: "Colosso cibernético de ataque brutal.",
    back: "Absorve dano e colide com ondas de impacto corpo a corpo.",
    lore: "Um caçador de recompensas cibernético vindo dos cinturões externos. Frio, calculista — e letal.",
    ship: "Black Reaper",
    special:
      "Canhão de Íons – Dispara projéteis lentos, mas com alto dano e chance de paralisar inimigos por 1s.",
    passive:
      "Modo Caçador – A cada 10 abates consecutivos, ganha +10% de velocidade e +10% de dano por 5s.",
    style: "Resistente, ideal para controle de rota e linha de frente.",
    quote: "Se eles respiram, podem ser caçados.",
  },
  {
    id: "nyra",
    name: "Nyra, A Tecno-Mística",
    image: nyraImage,
    shipImage: nyraNaveImage,
    classType: "Suporte",
    front: "Mistura mágica estelar com nanotecnologia.",
    back: "Manipula tempo e energia para controle e suporte.",
    lore: "Uma cientista renegada que fundiu sua consciência com uma inteligência alienígena. Domina tecnologia e energia obscura.",
    ship: "Void Whisper",
    special:
      "Orbe Psíquica – Orbita a nave e atinge inimigos próximos com dano contínuo.",
    passive:
      "Ressonância Cósmica – Habilidades secundárias recarregam 30% mais rápido.",
    style: "Controle de área com suporte e efeitos mentais.",
    quote: "A mente é uma arma. Eu sou o gatilho.",
  },
  {
    id: "zed",
    name: "Zed, O Engenheiro Louco",
    image: zedImage,
    shipImage: zedNaveImage,
    classType: "Engenheiro",
    front: "Construtor de torretas e armadilhas.",
    back: "Gênio instável que domina o caos tecnológico.",
    lore: "Um mecânico de estações espaciais abandonadas que usa invenções improvisadas e bugadas. Caótico e imprevisível.",
    ship: "Scrapstorm",
    special:
      "Drones Sucateados – Três mini-drones voam aleatoriamente, colidindo com inimigos e explodindo.",
    passive:
      "Sobrecarga Instável – A cada 15s, um efeito aleatório ocorre (boost de dano, escudo extra, explosão ao redor).",
    style:
      "Altamente imprevisível. Ótimo para quem gosta de caos e efeitos surpresa.",
    quote: "Se funciona... é tecnologia.",
  },
  {
    id: "rex",
    name: "Rex, O Último Guardião",
    image: rexImage,
    shipImage: rexNaveImage,
    classType: "Lendário",
    front: "Guerreiro lendário das guerras esquecidas.",
    back: "Portador da Judicator Prime. Destruição pura com rajadas de plasma e regeneração por abates.",
    lore: "Dizem que Rex caiu com a última fortaleza estelar… mas o universo erra ao pensar que ele caiu. Ele emergiu do vazio, envolto em silêncio e escombros, com uma única missão: eliminar a ameaça final.",
    ship: "Judicator Prime – Design robusto, angular, com fragmentos orbitando o corpo e brilho vermelho nos propulsores.",
    special:
      "Canhão Ômega de Sobrevivência – Uma rajada de plasma que atravessa tudo. Ao atingir 5 inimigos, regenera parte do escudo.",
    passive:
      "Fúria do Guardião – Após 20 abates consecutivos sem dano, entra em 'Ascensão': +50% dano, +25% velocidade e +10% escudo por 6s.",
    style: "Punitivo e preciso. Quanto mais sobrevive, mais forte se torna.",
    quote: "Eu vi o fim do universo… e ainda estou aqui.",
  },
];
