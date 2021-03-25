{/*<li class="collection-item" data-id="asdfsdafsdfa">
<div>
  Buying Food<a href="#!" class="modal-trigger secondary-content"
    ><i class="material-icons">delete</i></a
  ><a href="#modal1" class="modal-trigger secondary-content"
    ><i class="material-icons">edit</i></a
  >
</div>
</li>*/}

const todoList = document.querySelector('#todo-list');
const form = document.querySelector('#add-todo-form')
function renderList(doc) {
    let li = document.createElement('li');
    li.className = "collection-item";
    li.setAttribute('data-id', doc.id);
    let div = document.createElement('div');
    let title = document.createElement('span');
    title.textContent = doc.data().title;
    let anchor = document.createElement('a');
    anchor.href = "#modal1";
    anchor.className = "modal-trigger secondary-content";
    let editBtn = document.createElement('i');
    editBtn.className = "material-icons";
    editBtn.innerText = "edit";
    let deleteBtn = document.createElement('i');;
    deleteBtn.className = "material-icons secondary-content";
    deleteBtn.innerText = "delete";
    anchor.appendChild(editBtn);
    div.appendChild(title);
    div.appendChild(deleteBtn);
    div.appendChild(anchor);
    li.appendChild(div);
    deleteBtn.addEventListener('click', e => {
        console.log(e.target)
        let id = e.target.parentElement.parentElement.getAttribute('data-id');
        db.collection('todos').doc(id).delete();
    })
    editBtn.addEventListener('click', e => {
        console.log('edit')
    })

    todoList.append(li);


}


form.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('todos').add({
        title: form.title.value
    })
        .form.title.value = '';
})




db.collection('todos').orderBy('title').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    console.log(changes)
    changes.forEach(change => {
        if (change.type == 'added') {
            renderList(change.doc);

        } else if (change.type == 'removed') {
           let li = todoList.querySelector(`[data-id=${change.doc.id}]`);
           todoList.removeChild(li);
        } else if (change.type == 'modified') {
            console.log('modified')
        }
    });
})