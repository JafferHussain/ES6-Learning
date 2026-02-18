async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    });
    const data = await response.json();
    console.log(data);
}
postData();
async function putData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 1,
            title: 'foo123',
            body: 'bar',
            userId: 1,
        }),
    });
    const data = await response.json();
    console.log(data);
}
putData();

async function deleteData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
}
deleteData();

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
}
fetchData();

