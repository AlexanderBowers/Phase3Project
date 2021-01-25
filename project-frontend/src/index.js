const BASEURL = 'localhost:3000'
const FOLDERSURL = `${BASEURL}/folders`
const IMAGESURL = `${BASEURL}/images`

let myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log('test')
})