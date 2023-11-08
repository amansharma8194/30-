const addItemForm = document.querySelector('.add-items')
const ulEl = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem("Items")) || [];
const deleteAllBtn = document.querySelector('.delete-all')
const checkAllBtn = document.querySelector('.check-all')
const uncheckAllBtn = document.querySelector('.uncheck-all')
function populateList(items = [], ulContainer){
    ulContainer.innerHTML = items.map((item , i)=> 
        (`
            <li>
                <input type='checkbox' data-index=${i} id='item${i}' ${item.done? 'checked': ''} />
                <label for='item${i}' >${item.item}</label>
            </li>

        `)
    ).join('');
}
function addItem(e){
    e.preventDefault()
    const item = this.querySelector('[name=item]').value;
    const itemObj = {
        item: item, 
        done: false
    }
    items.push(itemObj)
    localStorage.setItem("Items", JSON.stringify(items))
    addItemForm.reset()
    populateList(items, ulEl)
}

function toggleInput(e){
    if(!e.target.matches('input')) return;
    const itemIndex = e.target.dataset.index
    items[itemIndex].done = !items[itemIndex].done
    localStorage.setItem("Items", JSON.stringify(items))
    populateList(items, ulEl)
}
function deleteAllItems(){
    items.length = 0;
    localStorage.removeItem("Items")
    ulEl.innerHTML = '<li>Add Items here...</li>'
}
function checkAllItem(){
    items.forEach(item => {
        item.done = true
    });
    localStorage.setItem("Items", JSON.stringify(items))
    populateList(items, ulEl)
}
function uncheckAllItems(){
    items.forEach(item => {item.done = false});
    localStorage.setItem("Items", JSON.stringify(items));
    populateList(items, ulEl);
}
    


addItemForm.addEventListener('submit', addItem);
ulEl.addEventListener('click', toggleInput);
deleteAllBtn.addEventListener('click', deleteAllItems)
checkAllBtn.addEventListener('click', checkAllItem)
uncheckAllBtn.addEventListener('click', uncheckAllItems)
populateList(items, ulEl);