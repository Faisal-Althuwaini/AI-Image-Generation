const api = "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"

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
    console.log(data)
}