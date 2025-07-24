



async function postData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',  // Tells the server we're sending JSON
    },
    body: JSON.stringify({
      title: 'Ghayur is learning POST!',
      body: 'Async/await is powerful 🔥',
      userId: 99,
    }),
  });

  const json = await response.json();
  console.log("✅ Server response:", json);
  
}

async function main(par) {
   console.log("start")
await postData();
console.log("end")

}


main()

