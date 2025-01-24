import LandingPage from '../assets/LandingPage.png';
import Crud from '../assets/Crud.png';
import LoginPage from '../assets/LoginPage.png';
import TranslationApp from '../assets/TranslationApp.png'

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
          title: 'Translation App',
          description: 'App que traduz textos em tempo real.',
          image: TranslationApp,
          github: 'https://github.com/HenzoBragas/TransalateApp',
          live: 'https://translationapp.com',
        },
      ];
    
      return projects;
    }

export default useProject
