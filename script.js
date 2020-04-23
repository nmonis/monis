const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  alert('you clicked me!')
})


/**
 * Math.random() gives you random value
 * from 0.00000001 to 0.99999999
 *
 * Math.random() * 10 will give you:
 * from 0.0000001 to 9.999999
 *
 * Math.random() * 250 will give you:
 * from 0.0000025 to 249.999975
 */

let counter = 0

btn.addEventListener('mouseover', () => {
  // generate random number:
  const randomX = Math.random() * 900
  // make the button run away
  btn.style.left = randomX + 'px'

  // increase the counter by 1 each time the button is touched
  counter++
  // you can use if-else to make the button stops moving
  // after certain counts
})