// PLEDGE
const signPledge = (formData) => {
  axios
    .post(
      "https://fb873g8hg7.execute-api.ap-southeast-1.amazonaws.com/v1/pledge/",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      // console.log(response);

      if (response.status === 200) {
        alert("Petition signed successfully, Thank you!");
      } else {
        return;
      }
    })
    .catch((error) => console.error(error));
};

const formPet = document.getElementById("petition");

const petEvent = formPet.addEventListener("submit", (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#firstName").value;
  const last_name = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const postal_code = document.querySelector("#postalCode").value;
  const country = document.querySelector("#country").value;

  const formData = {
    email: email,
    first_name: first_name,
    last_name: last_name,
    country: country,
    postal_code: postal_code,
  };

  console.log(formData);
  signPledge(formData);
});
