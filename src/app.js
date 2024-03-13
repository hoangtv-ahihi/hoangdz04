import http from "http";
import express from "express";
//bodyParse


// const app = http.createServer((req, res) =>{
//     if (req.url === "/") {
//         console.log("Chao Mung ban den voi chung toi");
//     } else if(req.url === "/api/products"){
//         const data = [
//             {id:1, name:"Hoangdz"},
//             {id:2, name:"Hoangdz 1"},
//             {id:3, name:"Hoangdz 2"},
//         ];
//         res.end(JSON.stringify(data));
//     };
//     console.log("runfing 3000...");
// });


const app = express();

// app.get(`/api/products`, (req, res) => {
//     const data = [
//                     {id:1, name:"Hoangdz"},
//                     {id:2, name:"Hoangdz 1"},
//                     {id:3, name:"Hoangdz 2"},
//                 ];
//                 res.json(data);

// });
// app.listen(3000, () => {
//     console.log("runfing refung=f 3000...");
// })

// app.get('/api/products', async (req, res) => {
//     try {
//         //fake connect database
//         const reponse = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
//         const data = await reponse.json();
//         //Trả về client
//         res.json(data);
//     } catch (error) {

//     }
// });
app.use(express.json());
app.get("/api/product", (req, res) => {
    res.json([
        {id:1, name:"Hoang"}
    ])
})
app.post("/api/product", (req, res) => {
    res.json([
        {id:1, name:"Hoang"}
    ])
})
app.put("/api/product", (req, res) => {
    res.json([
        {id:1, name:"Hoang"}
    ])
})
app.delete("/api/product", (req, res) => {
    res.json([
        {id:1, name:"Hoang"}
    ])
})
app.listen(8000);
export const viteNodeApp = app;