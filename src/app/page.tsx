import { IProfile } from '../models/profile/types';
import { getProfile, BASE_API_URL } from '@/lib/api-utils';

import Jumbotron from "../components/Jumbotron/Jumbotron";
import Works from '../components/Works/Works';
import About from '../components/About/About';
import Footer from '../components/layout/Footer';



export default async function Home () {
  if (!BASE_API_URL) { 
    return null
  }
  const { profile } = await getProfile();
  return (
    <>
        <Jumbotron />
        <Works />
        <About data={profile} />  
        <div className="preloader"></div>
        <Footer /> 
    </>
  )
}


