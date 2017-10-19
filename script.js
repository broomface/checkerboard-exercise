for (let i = 0; i < 81; i++){
  var body = document.getElementsByClassName("grid")[0];
  var div = document.createElement("div");
  document.body.appendChild(div);
  div.style.width = "11.1%"
  div.style.paddingBottom = "11.1%"
  div.display = "float";
  div.style.float = "left";

  if (i % 2 === 0){
    div.style.backgroundColor = "tan";
  }
  if (i % 2 === 1){
  div.style.backgroundColor = "black";

}
}
