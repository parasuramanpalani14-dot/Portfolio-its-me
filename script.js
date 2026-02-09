function enableEdit() {
  const password = prompt("Enter Admin Password:");

  if (password === "admin123") {
    document.querySelectorAll(".editable, #name, #objective")
      .forEach(el => {
        el.contentEditable = "true";
        el.style.border = "1px dashed red";
      });
    alert("Admin mode enabled. You can edit content now.");
  } else {
    alert("Wrong password!");
  }
}
