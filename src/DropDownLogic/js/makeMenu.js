function revealItem(target) {
  const items = Array.from(target.parentNode.childNodes).filter(
    (_, value) => value % 2 === 1 && value !== 1,
  );
  items.forEach((element) => {
    element.setAttribute("style", "display:inline-block");
  });
}

function removeItem(target) {
  Array.from(target.childNodes)
    .filter((_, value) => value % 2 === 1 && value !== 1)
    .forEach((value) => value.setAttribute("style", "display:none"));
}

export { revealItem, removeItem };
