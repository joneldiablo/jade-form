'use strict';

const $ = require('jquery');

class JadeForm {
  constructor(validator) {

    this.name = 'pug-form';

    $(".pug-form").on("change", "input,select", function (e) {
      let regexText = /^[a-zA-ZáéíóúÁÉÍÓÚÜü. ]+$/g,
        regexCP = /^\d{4}$/,
        regexDate = /^\d{4}-\d{2}-\d{2}$/,
        val = this.value,
        resp = true,
        validation = $(this).attr('data-validation');

      switch (validation) {
        case 'text':
          resp = regexText.test(val);
          break;
        case 'date':
          resp = regexDate.test(val);
          break;
        case 'cp':
          resp = regexCP.test(val);
          break;
        default:
          if (validator) {
            resp = validator(validation)
          }
          break;
      }
      $(this).removeClass('is-valid is-invalid');
      if (!val && $(this).prop('required')) {
        $(this).addClass('is-invalid');
        $(this).removeClass('is-valid');
      }
      if (val && validation) {
        if (resp) {
          $(this).addClass('is-valid');
        } else {
          $(this).addClass('is-invalid');
        }
      }
    });

    $.ajax({
      url: "http://localhost:3005/cities",
      method: "GET"
    }).done((data) => {
      var $opt = $("<option>");
      data.forEach(element => {
        $(".pug-form select").append($opt.clone().attr(element.attrs).text(element.text));
      });
    }).fail((error) => {

    });
  }
}

module.exports = JadeForm;