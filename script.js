const sectionWelcomeContainer = document.querySelector(".welcome");

const textHI = document.querySelector(".welcome-hi-container");

const welcomeText2 = document.querySelector(".welcome-text--welcome-to");
const welcomeText3 = document.querySelector(".welcome-text--my-portfolio");

const lampContainer = document.querySelector(".welcome--lamp-container");

addEventListener("load",()=>{
    textHI.style.marginRight = `1em`
    textHI.style.opacity = 1
    setTimeout(() => {
        textHI.style.marginBottom = `13em`;
        setTimeout(() => {
            welcomeText2.style.opacity = 1
            welcomeText2.style.marginLeft = 0
            setTimeout(() => {
                welcomeText3.style.opacity = 1
                welcomeText3.style.marginLeft = 0
                setTimeout(() => {
                    textHI.style.filter= `blur(4px)`
                    welcomeText2.style.filter= `blur(4px)`
                    welcomeText3.style.filter=  `blur(4px)`
                }, 900);
                setTimeout(() => {

                    textHI.style.filter= `blur(0px)`
                    welcomeText2.style.filter= `blur(0px)`
                    welcomeText3.style.filter=  `blur(0px)`

                    welcomeText2.style.marginLeft = `-2em`
                    welcomeText3.style.marginLeft = `-1.3em`
                    textHI.style.transform = `translate(-100px)`
                }, 2000);
            }, 500);
        }, 500);
    }, 1400);
})
