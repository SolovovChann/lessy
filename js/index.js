/**
 * Project's entry point
 */

import '../less/style.less'
import '../templates/index.pug'

document.querySelectorAll('.form-checkbox').forEach(checkbox => {
  let input = checkbox.querySelector('input')

  input.addEventListener('change', () => checkbox.classList.toggle('active'))
})

document.querySelectorAll('.form-radio').forEach(radio => {
  let input = radio.querySelector('input')

  input.addEventListener('change', () => {
    document.querySelectorAll('.form-radio').forEach(sibbling => sibbling.classList.remove('active'))
    radio.classList.add('active')
  })
})
