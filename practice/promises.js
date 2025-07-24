







async function getdata() {
    console.log("⬆️ Fetching data...");
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1').then((response)=>response.json()).then((json)=>console.log("📦 Data received:", json["userId"]))

}

async function main() {
    console.log("👋 Hello Ghayur");
    await getdata();
    console.log("🏁 Program ends");
}

main();
