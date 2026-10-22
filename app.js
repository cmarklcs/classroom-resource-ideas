// Loads cards.json and renders one card per entry, sorted by "order".
(function () {
  const list = document.getElementById("cards");
  const errorMsg = document.getElementById("load-error");

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function placeholder() {
    return el("div", "placeholder", "Preview coming");
  }

  function renderCard(card) {
    const item = el("li", "card");

    const media = el("div", "card-media");
    if (card.image) {
      const img = document.createElement("img");
      img.src = card.image;
      img.alt = "Preview of " + card.title;
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () {
        media.replaceChildren(placeholder());
      });
      media.appendChild(img);
    } else {
      media.appendChild(placeholder());
    }
    item.appendChild(media);

    const body = el("div", "card-body");
    body.appendChild(el("h3", "", card.title));

    const need = el("p", "need");
    need.appendChild(el("span", "label", "The need"));
    need.appendChild(document.createTextNode(card.need));
    body.appendChild(need);

    const built = el("p", "built");
    built.appendChild(el("span", "label", "What was built"));
    built.appendChild(document.createTextNode(card.built));
    body.appendChild(built);

    const link = el("a", "open-link", "Open this page →");
    link.href = card.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", "Open this page: " + card.title + " (opens in a new tab)");
    body.appendChild(link);

    item.appendChild(body);
    return item;
  }

  fetch("cards.json", { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (cards) {
      cards
        .slice()
        .sort(function (a, b) { return Number(a.order) - Number(b.order); })
        .forEach(function (card) { list.appendChild(renderCard(card)); });
    })
    .catch(function () {
      errorMsg.hidden = false;
    });
})();
