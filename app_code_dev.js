var updateView = async (button) => {
  let api = '';

  if (button.dataset.querytype === 'by_name') {
    let queryValue = document.querySelector('#nameQuery').value;
    api = `http://localhost:3000/api/by_name/${queryValue}`;
  }
  else if (button.dataset.querytype === 'by_age') {
    let start = document.querySelector('#startAgeQuery').value;
    let end = document.querySelector('#endAgeQuery').value;
    api = `http://localhost:3000/api/by_age/${start}/${end}`;
  }

  const response = await fetch(api);
  const model = await response.json();
  render_view(model);
};

var render_view = (model) => {
  var source = document.querySelector('#show_results_view').innerHTML;
  var template = Handlebars.compile(source);
  document.querySelector('#results').innerHTML = template(model);
  document.querySelector('#resultCount').textContent = model.employees.length;
};

var resetForm = () => {
  document.querySelector('#queryForm').reset();
  document.querySelector('#results').innerHTML = '';
  document.querySelector('#resultCount').textContent = 0;
};
