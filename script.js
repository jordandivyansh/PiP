const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream to pass it to the video element, then play

async function selectMediaStream(){
    try{
        const mediaStream =  await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
             videoElement.play();
        }
    }catch (error){
        console.log('error in selectMediaStream function -- ',error);
    }
}

button.addEventListener('click', async () =>{
    // disable button
    button.disabled = true;

    //starting p.. in picture
    await videoElement.requestPictureInPicture();

    //reset button
    button.disabled = false;
});

//onloading page

selectMediaStream();