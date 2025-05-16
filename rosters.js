document.addEventListener('DOMContentLoaded', () => {

const grid = document.getElementById('rosterGrid')

const render = list => {
grid.innerHTML = ''
list.forEach( p => {
    const col = document.createElement('div')

    col.className = 'col-6 col-lg-2'

col.innerHTML = `

 <div class = "card h-100 shadow-sm">
        <img src="${p.photo}" alt="${p.name}" class="card-img-top">
        <div class="div card-body text-center">
            <h5 class="card-title mb-1"> ${p.name} </h5>
            <div class="badge badge-position badge-pos-${p.role}">${p.role}</div>
            <p class="small text-muted mb-0">Skills:<br>${p.skills}</p>
             <button class="btn btn-primary mt-2 btn-task">Show Task</button>
        </div>
    </div> 

`

grid.appendChild(col)


})
}
render(gorillaBattleRoster)
})