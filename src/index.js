import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
//group by the menu items based on their type (Pasta, starters, pizza)
const newData = menuItems.reduce((obj, v, i) => {
  (obj[v["type"]] ? obj[v["type"]] : (obj[v["type"]] = null || [])).push(v);
  return obj;
}, {});
// convert object to arr for easy mapping
const dataArr = Object.entries(newData);
// sort data by menu order
const sortArr = dataArr.map((a, b) => {
  a[1].sort((a, b) => a.menuOrder - b.menuOrder);
  return a;
});

sortArr.map((element, index, arr) => {
  var menu = document.getElementById("menu");
  var section = document.createElement("section");
  var h3 = document.createElement("h3");
  var ul = document.createElement("ul");

  var menuTitle = element[0].charAt(0).toUpperCase() + element[0].slice(1);
  section.setAttribute("id", element[0]);
  menu.appendChild(section);

  h3.setAttribute("id", index);
  h3.appendChild(document.createTextNode(menuTitle));
  section.appendChild(h3);
  section.appendChild(ul);
  element[1].map((el, i) => {
    var li = document.createElement("li");
    li.setAttribute("id", el.name);
    li.setAttribute("class", el.spicy ? "spicy" : "");
    li.innerHTML = el.name + " - $" + el.price;
    ul.appendChild(li);
    return el;
  });

  return element;
});
