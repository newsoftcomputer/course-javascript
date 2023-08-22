
const d = document

$item = d.getElementById('todo-item')
$list = d.getElementById('todo-list')

d.addEventListener('submit', e => {
    if(!e.target.matches('#todo-form')) return false

    e.preventDefault()

    // Create Element
    let $li = d.createElement('li')

    // Get value
    $li.textContent = $item.value

    // Add to list
    $list.appendChild($li)

    // Clear input
    $item.value = ''
    $item.focus()
})
