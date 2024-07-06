export function createMenuButton(form: HTMLFormElement) {
  const menuBtnBox = document.createElement("div");
  menuBtnBox.className = "menu-btn-shadow";
  form.appendChild(menuBtnBox);

  const menuBtn = document.createElement("div");
  menuBtn.className = "menu-btn";
  menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
    <path d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm18 5H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1zm0 7H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z" style="transform: scale(1);"/>
  </svg>`;
  menuBtnBox.appendChild(menuBtn);
  const subMenuBox = document.createElement("div");
  subMenuBox.className = "menu-sub";
  form.appendChild(subMenuBox);

  const subData = document.createElement("div");
  subData.className = "menu-subData";
  subData.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
    <path d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zm18 5H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1zm0 7H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z" style="transform: scale(1);"/>
  </svg>`;

  const subList = document.createElement("div");
  subList.className = "menu-subList";
  subList.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
    <path d="M4 6h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm0 14v-8h16v8H4z" style="transform: scale(1);"/>
  </svg>`;

  const subPrint = document.createElement("div");
  subPrint.className = "menu-subPrint";
  subPrint.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
    <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-3H8V9h4v5h2v3zm2-12H9v2h5V5z" style="transform: scale(1);"/>
  </svg>`;

  const subHistory = document.createElement("div");
  subHistory.className = "menu-subHistory";
  subHistory.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 6v5h5v-1H13V10z" style="transform: scale(1);"/>
  </svg>`;

  subMenuBox.append(subData, subList, subPrint, subHistory, subList);
  menuBtnBox.addEventListener("click", () => {
    subMenuBox.style.visibility = "visable";
    if (subMenuBox.style.visibility === "visible") {
      subMenuBox.style.visibility = "hidden";
    } else {
      subMenuBox.style.visibility = "visible";
    }
  });

  return menuBtn;
}
