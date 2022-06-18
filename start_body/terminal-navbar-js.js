function take_action(text) {
  homepage_page_link = "index.html";
  proj_page_link = "projects.html";
  abt_page_link = "about.html";
  msg_page_link = "contact.html";
  if (
    text == "main" ||
    text == "Main" ||
    text == "homepage" ||
    text == "Homepage"
  ) {
    document.location.href = homepage_page_link;
  } else if (
    text == "proj" ||
    text == "Proj" ||
    text == "projects" ||
    text == "Projects"
  ) {
    document.location.href = proj_page_link;
  } else if (
    text == "abt" ||
    text == "Abt" ||
    text == "about" ||
    text == "About"
  ) {
    document.location.href = abt_page_link;
  } else if (
    text == "msg" ||
    text == "Msg" ||
    text == "message" ||
    text == "Message" ||
    text == "contact" ||
    text == "Contact"
  ) {
    document.location.href = msg_page_link;
  } else {
    alert(
      "The page that you requested to go to could not be found, or you mistyped."
    );
  }
}

function submitted() {
  input = document.getElementById("input-box").value;
  take_action(input);
  document.getElementById("input-box").value = "";
}
