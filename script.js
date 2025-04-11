document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.innerText = "↑";
  btn.className = "fixed bottom-6 right-6 p-3 bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-800 transition";
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.appendChild(btn);
});
