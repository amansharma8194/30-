const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
let lastCheck;
function handleClick(e){
    if(e.shiftKey && this.checked){
        let inBetween = false;
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastCheck) inBetween = !inBetween;
            if(inBetween) checkbox.checked = true;
        })
    }
    lastCheck = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));