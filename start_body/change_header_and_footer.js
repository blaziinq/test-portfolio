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
function make_footer() {
  footer = `
  <p>
    Well, this is the bottom of the page, but if you want, here are all the
    pages: <br />
    <a href="index.html">The Homepage</a> <br />
    <a href="projects.html">The Projects Page</a> <br />
    <a href="about.html">The About Page</a> <br />
    <a href="contact.html">How to Contact Me</a> <br />
    And here are both of the fonts that were used in this website. <br />
    <a
      href="https://fonts.google.com/specimen/Poppins"
      target="_blank"
      rel="noopener noreferrer">
      Poppins - For most of the text
    </a>
    <br />
    <a
      href="https://fonts.google.com/specimen/Source+Code+Pro"
      target="_blank"
      rel="noopener noreferrer"
      >Source Code Pro - For the navbar / terminal</a
    >
    <br />
    Finally, here are my socials. <br />
    <a
      href="https://www.youtube.com/channel/UCW3HXaz5-JIYztVTASZ348A"
      target="_blank"
      rel="noopener noreferrer"
      >My Youtube Channel</a
    >
    <br />
    <a
      href="https://twitter.com/blaziinqMC"
      target="_blank"
      rel="noopener noreferrer"
      >My Twitter</a
    >
    <br />
    <a href="#" onclick="CopyDiscordTag(); return false">My Discord</a>
  </p>`;

  document.getElementById("footer").innerHTML = footer;
}

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

function CopyDiscordTag() {
  var discord_tag = "blaziinq#0018";
  navigator.clipboard.writeText(discord_tag);
  alert("'" + discord_tag + "'" + " has been copied to your clipboard");
}
