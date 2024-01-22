import { Fragment} from "react";
import Head from "next/head";
import MainNavigation from "./MainNavigation";
import NavInfo from "./NavInfo";
import { LangContextProvider } from "../../store/langContext";

// import MainNavigation from "./mainNavigation";


const Layout = (props: any) => {

  return (
    <Fragment>
      <Head>
        <title>Esther Ogami- Freelancer Web Developer & Designer</title>
        <meta
          name="description"
          content="Freelancer Web Developer & Designer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LangContextProvider>
           <MainNavigation />
           <NavInfo />
            {props.children}
        </LangContextProvider>
      </main>
      
    </Fragment>
  );
};

export default Layout;
