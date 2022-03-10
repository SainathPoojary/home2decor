let counter = document.getElementsByClassName("counter");
let statistics = document.getElementsByClassName("statistics")[0];
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function inViewport(e) {
  let bounding = e.getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  } else {
    return false;
  }
}

let flag = true;
window.onscroll = async () => {
  if (inViewport(statistics) && flag == true) {
    flag = false;
    for (let i = 0; i <= 500; i += 2) {
      counter[0].innerHTML = i;
      if (i <= 10) counter[1].innerHTML = i;
      if (i <= 54) counter[2].innerHTML = i;
      if (i <= 450) counter[3].innerHTML = i;
      await delay(0.1);
    }
  }
};
