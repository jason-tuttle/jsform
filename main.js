
var form = document.querySelector('.form-input');


for (let i = 0; i < formData.length; i++) {
  var inputDiv = document.createElement('div');
  inputDiv.classList.add('form-item');
  form.appendChild(inputDiv);
  var currField = formData[i];
  var icon = document.createElement('i');
  let iconLabel = currField.icon;
  icon.setAttribute("class", iconLabel);
  inputDiv.appendChild(icon);
  if ((currField.type != 'textarea') && (currField.type != 'select')) {
    var newField = document.createElement('input');
    newField.setAttribute("type", currField.type);
    newField.setAttribute("value", currField.label);
    newField.setAttribute("id", currField.id);
    newField.classList.add("form-input");
    inputDiv.appendChild(newField);
  }
  if (currField.type === 'textarea') {
    var newTextArea = document.createElement('textarea');
    newTextArea.setAttribute("value", currField.label);
    newTextArea.setAttribute("id", currField.id);
    newTextArea.classList.add('form-input');
    inputDiv.appendChild(newTextArea);
  }
  if (currField.type === 'select') {
    var newSelect = document.createElement('select');
    newSelect.setAttribute("value", currField.label);
    newSelect.setAttribute("id", currField.id);
    newSelect.classList.add('form-input');
    for (let j = 0; j < currField.options.length; j++) {
      var selectOption = document.createElement('option');
      selectOption.setAttribute("value", currField.options[j].value);
      selectOption.textContent = currField.options[j].label;
      newSelect.appendChild(selectOption);
    }
    inputDiv.appendChild(newSelect);
  }
}
