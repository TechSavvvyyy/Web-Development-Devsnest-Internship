
function fu(){
    var a = anime({
        targets: '#root > div > div.ui.grid.container > div:nth-child(1) > a > div > div',
        rotate :1080,
        easing: 'easeInOutCubic',
        loop:2,
      });
      console.log('hi')
    }
print(document.getElementsByClassName('.card')[0])
document.getElementsByClassName('.card')[0].addEventListener("click", fu )

