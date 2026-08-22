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
  mads: {
    name: "Mads",
    image: "images/mads.png",
    role: "H. Moderator",
    roleClass: "credits-badge--hmod",
    discord: "https://discord.com/users/1416828896497631435",
    roblox: "https://www.roblox.com/users/730046515/profile",
  },
  bor4: {
    name: "BOR4",
    image: "images/bor4.png",
    role: "Moderator",
    roleClass: "credits-badge--mod",
    discord: "https://discord.com/users/1411661017456447611",
    roblox: "https://www.roblox.com/users/3509685661/profile",
  },
  pearl: {
    name: "Pearl",
    image: "images/pearl.png",
    role: "Moderator",
    roleClass: "credits-badge--mod",
    discord: "https://discord.com/users/934011683121279007",
    roblox: "https://www.roblox.com/users/1160253730/profile",
  },
  skylar: {
    name: "Skylar",
    image: "images/skylar.png",
    role: "Moderator",
    roleClass: "credits-badge--mod",
    discord: "https://discord.com/users/1138747845617397840",
    roblox: "https://www.roblox.com/users/4033587706/profile",
  },
  michiko: {
    name: "Michiko",
    image: "images/michiko.png",
    role: "Moderator",
    roleClass: "credits-badge--mod",
    discord: "https://discord.com/users/1454318962710937674",
    roblox: "https://www.roblox.com/users/10114222354/profile",
  },
  david: {
    name: "David",
    image: "images/david.png",
    role: "Moderator",
    roleClass: "credits-badge--mod",
    discord: "https://discord.com/users/1081264348657373204",
    roblox: "https://www.roblox.com/users/3645418522/profile",
  },
  yls: {
    name: "YLS",
    image: "images/yls.png",
    role: "Moderator",
    roleClass: "credits-badge--mod",
    discord: "https://discord.com/users/826172451137257482",
    roblox: "https://www.roblox.com/users/793043156/profile",
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

const hmodIcon = `
  <svg class="credits-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" fill-rule="evenodd" d="M12 2 3.5 5.2v6.3c0 5.2 3.5 9.9 8.5 11.5 5-1.6 8.5-6.3 8.5-11.5V5.2L12 2zm0 6.1 1.1 2.2 2.45.36-1.77 1.73.42 2.43L12 13.6l-2.2 1.16.42-2.43-1.77-1.73 2.45-.36L12 8.1z"/>
  </svg>
`;

const modIcon = `
  <svg class="credits-badge-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 2 3.5 5.2v6.3c0 5.2 3.5 9.9 8.5 11.5 5-1.6 8.5-6.3 8.5-11.5V5.2L12 2z"/>
  </svg>
`;

const params = new URLSearchParams(window.location.search);
const personId = (params.get("person") || "").toLowerCase();
const person = people[personId];

if (!person) {
  window.location.replace("credits.html");
} else {
  document.title = `${person.name} — TMMS`;

  const zoomClass = person.zoom ? " credits-avatar--deluxe" : "";
  const icon = {
    "credits-badge--management": managementIcon,
    "credits-badge--hmod": hmodIcon,
    "credits-badge--mod": modIcon,
  }[person.roleClass] || crownIcon;

  const glowClass = {
    "credits-badge--owner": "profile-card--owner",
    "credits-badge--coowner": "profile-card--coowner",
    "credits-badge--management": "profile-card--management",
    "credits-badge--hmod": "profile-card--hmod",
    "credits-badge--mod": "profile-card--mod",
  }[person.roleClass];

  document.querySelector(".profile-card").classList.add(glowClass);
  document.body.dataset.role = {
    "credits-badge--owner": "owner",
    "credits-badge--coowner": "coowner",
    "credits-badge--management": "management",
    "credits-badge--hmod": "hmod",
    "credits-badge--mod": "mod",
  }[person.roleClass];

  const avatar = person.initials
    ? `<div class="credits-avatar credits-avatar--initials">${person.initials}</div>`
    : `<div class="credits-avatar${zoomClass}">
        <img src="${person.image}" alt="${person.name}" />
      </div>`;

  document.getElementById("profile-info").innerHTML = `
    <p class="profile-kicker">TMMS ${person.role}</p>
    <div class="credits-avatar-wrap">
      ${avatar}
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

  discordBtn.hidden = false;
  robloxBtn.hidden = false;
  document.querySelector(".profile-actions-row").hidden = false;

  if (person.discord) {
    discordBtn.href = person.discord;
    discordBtn.target = "_blank";
    discordBtn.rel = "noopener noreferrer";
  }

  if (person.roblox) {
    robloxBtn.href = person.roblox;
    robloxBtn.target = "_blank";
    robloxBtn.rel = "noopener noreferrer";
  }
}
