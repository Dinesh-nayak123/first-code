const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = bmi;
  }
});

// const btn = document.getElementById('btn');
// const height = document.getElementById('height').value
// const weight = document.getElementById('weight').value
// const result = document.getElementById('results')


// btn.addEventListener('click',function(e){
//   const height = parseInt(document.getElementById('height').value)
//   const weight = parseInt(document.getElementById('weight').value)
// const result = document.getElementById('results')
//     e.preventDefault()
//     console.log(e);
//     console.log("ji");
//     console.log(height + weight);
//     const mainresult = height + weight;
//     result.innerHTML = mainresult
// })