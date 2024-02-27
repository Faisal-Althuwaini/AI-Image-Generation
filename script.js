const api = "PUT YOUR OPENAI API KEY HERE"

const input = document.getElementById("input")

const images = document.querySelector(".images")


const getImage = async () => {
    // Make a request to openai api
    const params = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body: JSON.stringify(
            {
                "prompt":input.value ,
                "n": 3,
                "size":"256x256"
            }
        )
    }

    const res = await fetch("https://api.openai.com/v1/images/generations", params)

    // Parse the response as json
    const data = await res.json()
    const listImages = data.data
    document.getElementById("images").innerHTML = ""
    for (img of listImages) {
    console.log(listImages)
    let content = `
    
    <div class="h-[200px] w-[200px] bg-slate-800 rounded-lg shadow-lg shadow-slate-500/20"><img src="${img.url}" alt=""></div>

    `
    document.getElementById("images").innerHTML += content
    
    }   

}