import NavInfo from "./NavInfo";
import { LangContextProvider } from '@/store/langContext';
import MainNavigation from "./MainNavigation";


const Layout = (props: any) => {

  return (
    
      <main>
       <LangContextProvider>
            <MainNavigation />
            <NavInfo />  
            {props.children}
        </LangContextProvider> 
      </main> 
  );
};

export default Layout;
