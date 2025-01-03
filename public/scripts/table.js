const createTable = () => {
    const table = document.getElementById('table');

    table.innerHTML = `
        <h2 class="text-center">User list</h2>
        <div class="container mt-3">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Age</th>
                    <th scope="col">ID</th>
                </tr>
                </thead>
                <tbody id="usersList"></tbody>
            </table>
        </div>
    `;
}

createTable()