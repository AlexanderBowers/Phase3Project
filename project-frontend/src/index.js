const BASEURL = 'http://localhost:3000'
const FOLDERSURL = `${BASEURL}/folders`
const IMAGESURL = `${BASEURL}/images`

let myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const formData = new FormData()
    const inpFile = document.getElementById('inpFile')
   
    
    formData.append(`${inpFile.files[0].name}`, inpFile.files[0])
    console.log('below is the file')
    console.log(inpFile.files[0])
    console.log('below is formData')
    console.log (formData)
    
    fetch(IMAGESURL, {
        method: 'post',
        headers: {
            'Content-Type': 'image/png'
        },
        body: formData
    }).then(resp => resp.json())
    .then(console.log)
})