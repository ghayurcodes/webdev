







async function getdata() {
     console.log("⬆️ Fetching data...");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=>response.json()).then((json)=>console.log("📦 Data received:", json["userId"]))
    //or
    //  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    // const json = await response.json();
    // console.log(json);

}

async function main() {
    console.log("👋 Hello Ghayur");
     await getdata();
    console.log("🏁 Program ends");
}

main();





// async function postData() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',  // Tells the server we're sending JSON
//     },
//     body: JSON.stringify({
//       title: 'Ghayur is learning POST!',
//       body: 'Async/await is powerful 🔥',
//       userId: 99,
//     }),
//   });

//   const json = await response.json();                                                                                //post method
//   console.log("✅ Server response:", json);
  
// }

// async function main() {
// console.log("start")
// await postData();
// console.log("end")

// }


// main()

