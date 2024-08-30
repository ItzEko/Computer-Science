let dataTable; //almacenar la datatable
let  dataTableInitialized = false;//va a servir para saber si la datatable ya esta inicializada, una tabla cuando se recarga se destruye y se vuelve a crear

const dataTableOptions={
    pageLength:3,
    destroy:true
};
//async() esta es una funcion asincrona la cual ejecuta de manera independiente una operacion y no bloquea la ejecucion del resto del codigo
//proceso de inicializacion
const initDataTable= async()=>{
    if (dataTableInitialized) {
        dataTable.destroy();
    }

    await listUsers();
    //en DataTable va a estar un objeto de configuracion
    dataTable=$("#datatable_users").DataTable(dataTableOptions);

    dataTableInitialized= true;
};

//lectura de la API de la pagina JSONplaceholder para hacer pruebas
const listUsers = async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
        const users = await response.json();
        console.log(users);

        //vamos a recorrer a los usuarios y su posicion (index)
        let content=``;
        users.forEach((user,index) => {
            //accedemos al objeto para mostrar las propiedades
            content+=` 
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                <td>${user.company.name}</td>
            </tr>`;
        });
        tableBody_users.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};
window.addEventListener("load", async()=>{
    await listUsers();
    initDataTable();
});