const people = {
  tradwr: {
    name: "Tradwr",
    image: "images/tradwr.png",
    role: "Owner",
    roleClass: "credits-badge--owner",
    zoom: false,
    roblox: "https://www.roblox.com/users/963196989/profile",
    discord: "https://discord.com/users/846103693958053949",
  },
  eto: {
    name: "Eto",
    image: "images/eto.png",
    role: "Co-Owner",
    roleClass: "credits-badge--coowner",
    zoom: false,
    roblox: "https://www.roblox.com/users/2768077320/profile",
    discord: "https://discord.com/users/1325483590825279488",
  },
  deluxe: {
    name: "Deluxe",
    image: "images/deluxe.png",
    role: "Co-Owner",
    roleClass: "credits-badge--coowner",
    zoom: true,
    roblox: "https://www.roblox.com/users/3298617316/profile",
    discord: "https://discord.com/users/1055868806855135363",
  },
  ace: {
    name: "Ace",
    image: "images/ace.png",
    role: "Management",
    roleClass: "credits-badge--management",
    zoom: false,
    roblox: "https://www.roblox.com/users/3519737769/profile",
    discord: "https://discord.com/users/688787015646445648",
  },
  fam: {
    name: "Fam",
    image: "images/fam.png",
    role: "Management",
    roleClass: "credits-badge--management",
    zoom: false,
    roblox: "https://www.roblox.com/users/1189733117/profile",
    discord: "https://discord.com/users/917030806852108328",
  },
  madz: {
    name: "Madz",
    image: "images/madz.png",
    role: "Management",
    roleClass: "credits-badge--management",
    zoom: false,
    roblox: "https://www.roblox.com/users/3797681194/profile",
    discord: "https://discord.com/users/1373965985828044810",
  },
};

const crownIcon = `
  <svg class="credits-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M5 16 3 7l5.2 3.8L12 4l3.8 6.8L21 7l-2 9H5zm0 2h14v2H5v-2z"/>
  </svg>
`;

const managementIcon = `
  <img class="credits-badge-icon" src="images/management-icon.png" alt="" />
`;

const personId = new URLSearchParams(window.location.search).get("person");
const person = people[personId];

if (!person) {
  window.location.replace("credits.html");
} else {
  document.title = `${person.name} — TMMS`;

  const zoomClass = person.zoom ? " credits-avatar--deluxe" : "";
  const icon = person.role === "Management" ? managementIcon : crownIcon;

  const glowClass = {
    "credits-badge--owner": "profile-card--owner",
    "credits-badge--coowner": "profile-card--coowner",
    "credits-badge--management": "profile-card--management",
  }[person.roleClass];

  document.querySelector(".profile-card").classList.add(glowClass);
  document.body.dataset.role = {
    "credits-badge--owner": "owner",
    "credits-badge--coowner": "coowner",
    "credits-badge--management": "management",
  }[person.roleClass];

  document.getElementById("profile-info").innerHTML = `
    <p class="profile-kicker">TMMS ${person.role}</p>
    <div class="credits-avatar-wrap">
      <div class="credits-avatar${zoomClass}">
        <img src="${person.image}" alt="${person.name}" />
      </div>
    </div>
    <p class="credits-name">${person.name}</p>
    <span class="credits-badge ${person.roleClass}">
      ${person.role}
      ${icon}
    </span>
  `;

  const card = document.querySelector(".profile-card");
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  const discordBtn = document.getElementById("discord-btn");
  const robloxBtn = document.getElementById("roblox-btn");

  discordBtn.href = person.discord;
  discordBtn.target = "_blank";
  discordBtn.rel = "noopener noreferrer";

  robloxBtn.href = person.roblox;
  robloxBtn.target = "_blank";
  robloxBtn.rel = "noopener noreferrer";
}
