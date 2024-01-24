import NavInfo from "./NavInfo";
import { LangContextProvider } from '@/store/langContext';
import MainNavigation from "./MainNavigation";



const Layout = (props: any) => {

  return (
      <main>
       <LangContextProvider>
            {props.children}
            <MainNavigation />
            <NavInfo />  
        </LangContextProvider> 
      </main> 
  );
};

export default Layout;
