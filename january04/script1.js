async function fet() {
    let table = document.querySelector('#displaydata');
    let res = await fetch("http://localhost:3000/emp");
    let data = await res.json()
    let finaldata = data.map((x)=>
    `<tr>
    <td>${x.id}</td>
    <td>${x.name}</td>
    <td>${x.age}</td>
    <td>${x.city}</td>
    <td>${x.contact}</td>
    <td><button onclick ="edit('${x.id}')">update</button></td>
    <td><button onclick = "mydelete('${x.id}')">Delete</button></td>
     </tr>`
    ).join("")
    table.innerHTML = finaldata;
}
fet();

// ======================= delete =========================

function mydelete(id){
    fetch(`http://localhost:3000/emp/${id}`,{
        method:'DELETE'
    })
    .then(res=>alert("deleted.....!!!"))
}

// insert data
function insert_data(){
    let data = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        city : document.querySelector('#city').value,
        contact : document.querySelector('#contact').value
    }
    
    fetch("http://localhost:3000/emp",{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
    })
    .then(r=>alert("data inserted"))
}
// ======================= update =========================
async function edit(id) {
    let res = await fetch(`http://localhost:3000/emp/${id}`)
    let data = await res.json()
    let edit_frm = `
    <input type="text" value="${data.id}" id="id1" readonly><br>
    <input type="text" value="${data.name}" id="name1"><br>
    <input type="text" value="${data.age}" id="age1"><br>
    <input type="text" value="${data.contact}" id="contact1"><br>
    <input type="text" value="${data.city}" id="city1"><br>
    <input type="submit" onclick = "myupdate('${data.id}')">
    `
    document.querySelector('#editform').innerHTML = edit_frm;
}

function myupdate(id){
    let update = {
        name:document.querySelector('#name1').value,
        id:document.querySelector('#id1').value,
        age:document.querySelector('#age1').value,
        contact:document.querySelector('#contact1').value,
        city:document.querySelector('#city1').value,
        id:document.querySelector('#id1').value
    }
    fetch(`http://localhost:3000/emp/${id}`,{
        method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(update)
    })
    .then(res => alert("updated....."))
}

// async function edit(id) {
//     let res = await fetch(`http://localhost:3000/emp/${id}`)
//     let data = await res.json()
//     let edit_frm = `
//     <input type="text" id="id1" value="${data.id}" readonly><br>
//     <input type="text" id="name1" value="${data.name}"><br>
//     <input type="text" id="age1" value="${data.age}"><br>
//     <input type="text" id="contact1" value="${data.contact}"><br>
//     <input type="text" id="city1" value="${data.city}"><br>
//     <input type="submit" onclick="myupdate('${data.id}')">
//     `
//     document.querySelector('#editform').innerHTML = edit_frm;
// }

// function myupdate(id){
//     let update = {
//         name: document.querySelector('#name1').value,
//         age: document.querySelector('#age1').value,
//         contact: document.querySelector('#contact1').value,
//         city: document.querySelector('#city1').value,
//         id: document.querySelector('#id1').value
//     }
//     fetch(`http://localhost:3000/emp/${id}`, {
//         method: 'PUT',
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify(update)
//     })
//     .then(res => alert("updated....."))
// }