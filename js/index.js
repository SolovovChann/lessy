/**
 * Project's entry point
 */

import '../less/style.less'
import '../templates/index.pug'

document.querySelectorAll('.form-checkbox').forEach(checkbox => {
  let input = checkbox.querySelector('input')

  input.addEventListener('change', event => checkbox.classList.toggle('active'))
})
