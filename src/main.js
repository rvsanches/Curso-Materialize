// Floating Action Button
const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns, {
    direction: "left",
    hoverEnabled: false
});

// Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});
const elemsSidenav = document.querySelectorAll(".sidenav");
const instancesSidenav = M.Sidenav.init(elemsSidenav, {
    edge: "left"
});

// Modal
const elemsModal = document.querySelectorAll(".modal");
const instancesModal = M.Modal.init(elemsModal);

// Tooltip
const elemsTooltip = document.querySelectorAll(".tooltipped");
const instanceTooltip = M.Tooltip.init(elemsTooltip, {
    html: "Olha essa dica!",
    position: "right"
});

// Toast
const elemnsToast = document.querySelector("#toast");
const instanceToast = () => {
    M.toast( {
        html: "Também sou uma notificação",
        classes: "rounded"
    })
}

elemnsToast.addEventListener("click", () => {
    instanceToast();
});