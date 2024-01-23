import { Metadata } from 'next'
import MainNavigation from "./MainNavigation";
import NavInfo from "./NavInfo";
import { LangContextProvider } from '@/store/langContext';


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
