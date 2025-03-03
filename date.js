function updateDateTime() {
    const now = new Date();
    const weekday = now.toLocaleString('en-US', { weekday: 'long' }) + ',';
    const date = now.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('weekday').innerText = weekday;
    document.getElementById('dateTime').innerText = date;
}
setInterval(updateDateTime, 1000); 
window.onload = updateDateTime;
