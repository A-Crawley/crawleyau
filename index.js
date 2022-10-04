const randomPosition = () => {
  return (
    Math.random() * ((width < 600 ? width - 50 : width) * 0.75) +
    (width < 600 ? width - 50 : width) * (0.25 / 2)
  );
};

const randomTime = () => {
  return Math.random() * 500;
};

const createDroplet = () => {
  let aubergine = document.createElement("div");
  aubergine.setAttribute("class", "aubergine spin");
  aubergine.innerHTML = "🍆";
  let droplet = document.createElement("div");
  droplet.setAttribute("class", "droplet drop");
  droplet.setAttribute("style", `left: ${randomPosition()}px;`);
  droplet.appendChild(aubergine);
  return droplet;
};

let droplets = [];

const height = window.innerHeight;
const width = window.innerWidth;
const container = document.querySelector("#container");

setInterval(async () => {
  const droplets = document.querySelectorAll(".droplet");
  if (droplets.length < 75) {
    setTimeout(() => {
      container.appendChild(createDroplet());
    }, randomTime());
  }

  droplets.forEach((droplet) => {
    if (droplet.getClientRects()[0]?.y > height) {
      droplet.remove();
    }
  });

  //console.count(droplets.length);
}, 50);
