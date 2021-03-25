{/*<li class="collection-item">
<div>
  Buying Food<a href="#!" class="modal-trigger secondary-content"
    ><i class="material-icons">delete</i></a
  ><a href="#modal1" class="modal-trigger secondary-content"
    ><i class="material-icons">edit</i></a
  >
</div>
</li>*/}





function renderList(doc){
let li = document.createElement('li');
li.className = "collection-item";
li.setAttribute('data-id', doc.id)
}



db.collection('todos').orderBy('title').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    //console.log(changes)
    changes.forEach(change => {
        if(change.type == 'added') {
            console.log(change.doc.data())
        }else if(change.type == 'removed'){
            console.log('removed')
        }else if(change.type == 'modified'){
            console.log('modified')
        }
    })
})