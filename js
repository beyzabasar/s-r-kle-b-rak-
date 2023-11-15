const fiil = document.querySelector('.fiil')
const empties = document.querySelector('.empty')

fiil.addEventListener('dragstart',dragStart)
function dragStart(){
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}
fill.addEventListener('dragend', dragEnd)
function dragEnd() {
  //console.log('dragEnd')
  this.className = 'fill'
}
for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragleave)
    empty.addEventListener('drop', dragDrop)
}
function dragOver(e){
    //console.log('dragOver')
  e.preventDefault()
}
function dragEnter(e) {
    //console.log('dragEnter')
    e.preventDefault()
    this.className += ' hover'
  }
  
  function dragleave() {
    //console.log('dragleave')
    this.className = 'empty'
  }
  
  function dragDrop() {
    //console.log('dragDrop')
    this.className = 'empty'
    this.append(fill)
  }
