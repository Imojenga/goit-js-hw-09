let formData = { email: '', message: '' };
const feedbackFormEl = document.querySelector('.feedback-form');

const fillFormFields = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (formDataFromLS === null) {
      return;
    }

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormFields();

const onFormFieldType = event => {
  const fieldValue = event.target.value;
  const fieldName = event.target.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
};

feedbackFormEl.addEventListener('input', onFormFieldType);
feedbackFormEl.addEventListener('submit', onFormSubmit);
