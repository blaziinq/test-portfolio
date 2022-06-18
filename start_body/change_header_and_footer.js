function make_header() {
  navbar = `
  <p class="navbar-text">
    Type: 'main' for the homepage, 'proj' for the projects page, 'abt'
    for about, and 'msg' for info on how to contact me.
  </p>
  <form action="#" onsubmit="submitted(); return false">
    <div id="prompt" class="navbar-text">user@website-interface $</div>
    <input type="text" id="input-box" class="navbar-text" />
  </form>
`;

  document.getElementById("header").innerHTML = navbar;
}
function make_footer() {}

// cross browser way to add an event listener
function addListener(event, obj, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(event, fn, false); // modern browsers
  } else {
    obj.attachEvent("on" + event, fn); // older versions of IE
  }
}
addListener("load", window, function () {
  make_header();
  make_footer();
});
