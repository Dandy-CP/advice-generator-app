var url = "https://api.adviceslip.com/advice";
const MyAdvice = document.getElementById("advice");
const AdviceId = document.getElementById("number");
const Dice = document.querySelector(".dice");

async function getAdvice() {
  const Advice = await axios.get(url);
  AdviceId.textContent = `${Advice.data.slip.id}`;
  MyAdvice.textContent = `"${Advice.data.slip.advice}"`;
}

Dice.addEventListener("click", getAdvice);

/* axios
  .get(url)
  .then((response) => {
    MyAdvice.innerHTML = response.data.slip.advice;
    AdviceId.innerHTML = response.data.slip.id;
  })
  .catch((error) => console.log("error:" + error)); */
