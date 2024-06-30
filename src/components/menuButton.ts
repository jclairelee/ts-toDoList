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

  menuBtnBox.addEventListener("click", () => {
    console.log("Menu button clicked");
  });

  return menuBtn;
}
