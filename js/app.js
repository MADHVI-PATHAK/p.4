const navSlide = () =>{
      const bars = document.querySelector('.fa-bars');
      const web = document.querySelector('.web');

      bars.addEventListener('click', () => {
          web.classList.toggle('web-active');
      });
  }
navSlide();