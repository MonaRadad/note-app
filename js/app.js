let $ = document

let inputEl = $.getElementById('input-field')
let btnSaveEl = $.getElementById('btn-save')
let listEl = $.getElementById('listed')
let colorsBox = $.querySelectorAll('.color-box')
let btnDelete = $.querySelector('#btn-delete')

colorsBox.forEach(colorBox => {
    colorBox.addEventListener('click', (event) => {
        let mainColor = event.target.style.backgroundColor
        inputEl.style.backgroundColor = mainColor
    })
})

let noteCount = 1


inputEl.addEventListener('keyup', (event) => {
    if(event.keyCode == 13) {
        btnSaveEl.onclick()
    }    
})

btnSaveEl.onclick = () => {
    let text = inputEl.value
    if (text === '') {
        alert('لطفا اینپوت را پر نمایید :)')
        return false;
    } else {
        let color = inputEl.style.backgroundColor

        let containerEl = $.createElement('div')
        containerEl.setAttribute('class', 'card shadow-sm rounded')
        containerEl.setAttribute('id', 'note' + noteCount)
        containerEl.setAttribute('onclick', 'removeNote(event)')
        containerEl.style.backgroundColor = color

        let textEl = $.createElement('p')
        textEl.setAttribute('class', 'card-text p-3')
        textEl.innerHTML = text

        containerEl.appendChild(textEl)

        listEl.appendChild(containerEl)

        inputEl.value = ''
        inputEl.style.backgroundColor = 'white'
        noteCount++
    }
}

btnDelete.addEventListener('click', () => {
    inputEl.value = ""
    inputEl.style.backgroundColor = "#fff"
})

function removeNote(event) {
    let mainNote = event.target.parentNode
    mainNote.remove()
}