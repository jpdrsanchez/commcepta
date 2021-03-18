const getData = () => {
  const wrapper = document.querySelector('[data-wrapper]');
  const mainCard = document.querySelector('[data-card]');

  if (wrapper) {
    const getMainCardInfo = (element) => {
      const data = JSON.parse(element.getAttribute('data-info'));
      return data;
    };

    const setMainCardInfo = (data) => {
      mainCard.innerHTML = `
        <img src="./assets/images/${data.foto}" alt="${data.nome}" class="card__image">
        <div class="card__content card__content--main">
          <ul class="card__list">
            <li class="card__item">Nome: <span>${data.nome}</span></li>
            <li class="card__item">Cargo: <span>${data.cargo}</span></li>
            <li class="card__item">Idade: <span>${data.idade}</span></li>
          </ul>
        </div>
      `;
    };

    const handleClick = (event) => {
      const theElement = event.currentTarget;
      const data = getMainCardInfo(theElement);
      setMainCardInfo(data);
      window.scrollTo(0, 0);
    };

    const createTemplate = (data) => {
      const element = document.createElement('article');
      element.classList.add('card');
      element.classList.add('card--hover');
      element.setAttribute(
        'data-info',
        `{"foto": "${data.foto}", "nome": "${data.nome}", "cargo": "${data.cargo}", "idade": "${data.idade}"}`,
      );
      element.innerHTML = `
        <img src="./assets/images/${data.foto}" alt="${data.nome}" class="card__image">
        <div class="card__content">
          <h1 class="card__title">${data.nome}</h1>
          <h2 class="card__subtitle">${data.cargo}</h2>
        </div>
      `;
      return element;
    };

    const getEmployeeData = async () => {
      const response = await fetch('../../../Dados/dados.json');
      return response.json();
    };

    const setTemplate = async () => {
      wrapper.innerHTML = 'Carregando...';
      const getTheData = await getEmployeeData();
      wrapper.innerHTML = '';
      getTheData.forEach((employee) => {
        const getElement = createTemplate(employee);
        wrapper.appendChild(getElement);
      });
    };

    const putTemplateIntoDom = async () => {
      await setTemplate();
    };

    const setListenerInItems = async () => {
      await putTemplateIntoDom();
      const elements = wrapper.querySelectorAll('.card--hover');
      const [fristElement] = elements;

      const data = getMainCardInfo(fristElement);
      setMainCardInfo(data);

      elements.forEach((element) => {
        element.addEventListener('click', handleClick);
      });
    };

    setListenerInItems();
  }
};

export default getData;
