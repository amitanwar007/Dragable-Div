const dragableDiv = document.querySelector('.dragable-div');


function onDrag({ movementX, movementY }) {

    let getStyle = window.getComputedStyle(dragableDiv)
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    dragableDiv.style.left = `${left + movementX}px`;
    dragableDiv.style.top = `${top + movementY}px`;

    // console.log(movementX,movementY);
    console.log(left, top);
}
dragableDiv.addEventListener("mousedown", () => {
    dragableDiv.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", () => {
    dragableDiv.removeEventListener("mousemove", onDrag);
});