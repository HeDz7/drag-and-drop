const dragItems = document.querySelectorAll('.drag')
const dropItems = document.querySelectorAll('.drop_item')

// Drag Events
dragItems.forEach(drag => {
    drag.addEventListener('dragstart', dragStart)
});

// Drop Events
dropItems.forEach(drop => {
  drop.addEventListener('dragover', dragOver)
  drop.addEventListener('drop', dropEvent)
  drop.addEventListener('dragleave', dragLeave)
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.innerText)
  
  // setTimeout(() => {
  //   this.className = 'invisible'
  // }, 0)
}

function dragOver(e) {
  e.preventDefault()

  this.className += ' enter'
}

function dropEvent(e) {
  e.preventDefault()

  this.className = 'drop_item'
  const el = document.createElement('p')
  el.className = 'drag'
  el.innerText = e.dataTransfer.getData('text')

  this.appendChild(el)
}

function dragLeave(e) {
  e.preventDefault()

  this.className = 'drop_item'
}