export function validateOverflows(){
    let overflow = document.getElementById("overflow-bottom")
    if (window.innerHeight < document.body.scrollHeight) {
      overflow.style.display = "block"
    } else {
      overflow.style.display = "none"
    }
  }

export function determineOverflows(elem) {
    let overflowBottom = document.getElementById("overflow-bottom")
    let overflowTop = document.getElementById("overflow-top")
    const totalHeight = elem.scrollHeight;
    const currentScroll = elem.scrollTop + elem.clientHeight
    const isAtBottom = Math.abs(currentScroll - totalHeight) < 1;
    overflowBottom.style.display = (isAtBottom) ? "none" : "block"
    overflowTop.style.display = (elem.scrollTop < 1) ? "none" : "block"
  }