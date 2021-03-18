const menuMobile = () => {
  const button = document.querySelector('[data-mobile="button"]');
  const menu = document.querySelector('[data-mobile="menu"]');

  if (button && menu) {
    const handleClick = (event) => {
      event.preventDefault();
      button.classList.toggle('active');
      menu.classList.toggle('active');
    };

    button.addEventListener('click', handleClick);
  }
};

export default menuMobile;
