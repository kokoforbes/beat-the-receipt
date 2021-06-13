// GET YEAR
document.getElementById("year").innerHTML = new Date().getFullYear();

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;

  var a = (value * 130) / 1000;
  var b = value * 13;
  var c = value * 0.26;
  var d = value * 0.05;

  document.getElementById("carbon").innerHTML = a.toFixed(2) + "kg";
  document.getElementById("bags").innerHTML = b.toFixed(0);
  document.getElementById("beer").innerHTML = c.toFixed(0);
  document.getElementById("burger").innerHTML = d.toFixed(0);
}

window.onload = rangeSlide(21);

// SUBSCRIBE
const subscribe = (email) => {
  axios
    .post(
      "https://fb873g8hg7.execute-api.ap-southeast-1.amazonaws.com/v1/subscription/",
      email,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      // console.log(response);

      if (response.status === 200) {
        alert("successfully subscribed!");
        document.getElementById("campaign").reset();
      } else {
        return;
      }
    })
    .catch((error) => console.error(error));
};

const formSub = document.getElementById("campaign");

const subEvent = formSub.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("subscribe").value;

  const data = {
    email: email,
  };

  subscribe(data);
});
