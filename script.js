const markAllReadButton = document.querySelector(".mark-all-as-read");

function handleMarkAllRead() {
  const notifications = document.querySelectorAll("li");
  notifications.forEach((notification) => {
    notification.classList.remove("unread");
  });
}
markAllReadButton.addEventListener("click", handleMarkAllRead);
