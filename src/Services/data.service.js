 const data = [
    { p: "Have you been involved in taking hard drugs?" },
    { p: "Have you been involved in crimaial activity?" },
    { p: "Have you been involved in taking hard drugs?" },
    { p: "Have you been involved in crimaial activity?" },
    { p: "Have you been involved in taking hard drugs.have you been involved in taking hard drugs?" },
    { p: "Have you been involved in crimaial activity?" },
    { p: "Have you been involved in crimaial activity?" },
]

export const getData = () =>{
    return new Promise((reslove, reject)=>{
        reslove(data)
    })
}


const result = await getData();


getData().then((result)=>{
    
})