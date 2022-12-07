document.write(` 
<a href="index.html"><img class=" favicon" src="images/android-chrome-192x192.png" alt="favicon" title="favicon"></a>
<div id="nav-container">
    <div class="dropdown">
        <button class="dropbtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
        <div class="dropdown-content">
            <a class="nav-link" href="index.html">Home</a>
            <a class="nav-link" href="entertainment.html">Entertainment</a>
            <a class="nav-link" href="cooking.html">Cooking</a>
            <a class="nav-link" href="aesthetics.html">Aesthetics</a>
            <a class="nav-link" href="contact.html">Contact Me</a>
            <a class="nav-link" href="sitemap.html">Sitemap</a> 
            <button id="change" >Change Mode</button>
        </div>
    </div>
</div>`);

function changeMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

document.getElementById("change").addEventListener("click", function () {
  changeMode();
});
