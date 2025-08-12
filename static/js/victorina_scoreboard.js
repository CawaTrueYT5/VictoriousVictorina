function GoToPage(event) {
    history.pushState({}, "", "/victorinas/" + String(event.target.id));
    location.reload();
}
function Start(event) {
    history.pushState({}, "", "/victorinas/" + String(event.target.id) + "/processing");
    location.reload();
}