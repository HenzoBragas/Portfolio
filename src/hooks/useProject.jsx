import LandingPage from '../assets/LandingPage.png';
import Crud from '../assets/Crud.png';
import LoginPage from '../assets/LoginPage.png';
import DevBurguer from '../assets/DevBurguer.png';

function useProject() {
    const projects = [
        {
          id: 1,
          title: 'Landing Page',
          description: 'Uma página inicial moderna e responsiva.',
          image: LandingPage,
          github: 'https://github.com/HenzoBragas/LandingPage--Food',
          live: 'https://landingpagefood.vercel.app/',
        },
        {
          id: 2,
          title: 'CRUD App',
          description: 'Aplicativo para cadastro de cartões.',
          image: Crud,
          github: 'https://github.com/HenzoBragas/CRUD',
          live: 'https://crudapp.com',
        },
        {
          id: 3,
          title: 'Login Page',
          description: 'Tela de login simples e intuitiva.',
          image: LoginPage,
          github: 'https://github.com/HenzoBragas/LoginPage-React',
          live: 'https://loginpage-react.vercel.app/',
        },
        {
          id: 4,
          title: 'DevBurguer App',
          description: 'App de comida com sistema de carrinho.',
          image: DevBurguer,
          github: 'https://github.com/HenzoBragas/Dev_Burguer',
          live: 'https://dev-burguer-weld.vercel.app/',
        },
      ];
    
      return projects;
    }

export default useProject
