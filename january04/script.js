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
    <td><button onclick = ""></button></td>
    </tr>`
    ).join("")
    table.innerHTML = finaldata;
}
fet();