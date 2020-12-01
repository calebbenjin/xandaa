document.querySelector('.bugger-show').addEventListener('click', () => {
  document.querySelector('aside').classList.toggle('show-sideNav')
  console.log('Clicked')
})





function showPreviewOne(event){
  if(event.target.files.length > 0){
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
    document.querySelector('.cover-text').style.display = 'none'
  } 
}

function myImgRemoveFunctionOne() {
  document.getElementById("file-ip-1-preview").src = "";
}