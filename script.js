const markAllReadButton = document.querySelector(".mark-all-as-read");
const notificationsTotal = document.querySelector(".notifications-total");

function handleMarkAllRead() {
  const notifications = document.querySelectorAll("li");
  notifications.forEach((notification) => {
    notification.classList.remove("unread");
  });
  notificationsTotal.textContent = "0";
}
markAllReadButton.addEventListener("click", handleMarkAllRead);
