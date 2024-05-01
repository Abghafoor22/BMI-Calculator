const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")
  const details = document.querySelector("#details")


  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = "Pease give a valid heigth"

  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = "Pease give a valid weight"

  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span> ${bmi} </span>`

    if (bmi < 18.6) {
      details.innerHTML = `<span>Your bmi is less than 18.6. So you are Under Weighted </span>`
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      details.innerHTML = `<span>Your bmi lays between 18.6 to 24.9 So you are in Normal range </span>`
    }
    if (bmi > 24.9) {
      details.innerHTML = `<span>Your bmi is Greater than 24.9 So you are <b>Overweighted</b> </span>`
    }
  }

})