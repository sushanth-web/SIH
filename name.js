// Handle login button click
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    if (name.trim() !== "") {
      localStorage.setItem("username", name);
      window.location.href = "index.html";
    } else {
      alert("Please enter your username");
    }
  });
}

// On main.html, display username
const mainName = document.getElementById("mainname");
const loginName = document.getElementById("loginname")
if (mainName) {
  const storedName = localStorage.getItem("username");
  if (storedName) {
    mainName.innerText = storedName;
    loginName.innerText = storedName;
  }
}
