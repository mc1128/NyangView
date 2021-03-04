document.getElementById("textReset").ondblclick = function textReset() {
  const TITLE_LS = "titleSave";
  localStorage.removeItem(TITLE_LS);
  localStorage.removeItem(USER_DEL);
  greeting.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
};
