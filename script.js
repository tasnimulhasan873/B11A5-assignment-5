// Real Time date
function updateDateTime() {
  const now = new Date();
  const weekday = now.toLocaleString("en-US", { weekday: "long" }) + ",";
  const date = now.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  document.getElementById("weekday").innerText = weekday;
  document.getElementById("dateTime").innerText = date;
}
setInterval(updateDateTime, 1000);
window.onload = updateDateTime;

// color changer

document.getElementById("colorChanger").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});


// Task work
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".taskC").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.disabled) return;
      this.disabled = true;
      this.classList.add("disabled:bg-gray-400");
      alert("Board Update Successfully");

      let taskAssigned = parseInt(
        document.getElementById("taskExist").innerText
      );
      if (taskAssigned - 1 === 0) {
        setTimeout(() => {
          alert("Congrats! You have completed all the current tasks.");
        }, 100); 
      }
      taskAssigned--;
      document.getElementById("taskExist").innerText = taskAssigned;

      let taskCompleted = parseInt(
        document.getElementById("taskCompleted").innerText
      );
      taskCompleted++;
      document.getElementById("taskCompleted").innerText = taskCompleted;
      let parentBox = this.closest(".taskBox");
      let taskName = parentBox.querySelector(".taskName").textContent;
      const taskHistory = document.getElementById("taskHistory");
      const taskHistoryItem = document.createElement("p");
      taskHistoryItem.classList.add("taskHistoryItem");

      const time = new Date().toLocaleTimeString();
      taskHistoryItem.textContent = `You have completed the task ${taskName} at ${time}`;
      taskHistory.appendChild(taskHistoryItem);
      taskHistoryItem.classList.add(
        "bg-gray-200",
        "p-2",
        "rounded",
        "mt-2",
        "w-[298px]",
        "mx-auto"
      );
      useTaskName(taskName);
    });
  });
});


// clear History
function clearHistory() {
  const taskHistory = document.getElementById("taskHistory");
  taskHistory.innerHTML = "";
}
