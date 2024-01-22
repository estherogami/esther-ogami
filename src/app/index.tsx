import type { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { GetStaticProps } from "next";

import { getAllProjects, getProfile } from "../lib/api-utils";
import { IProject } from "../models/project/types";
import { IProfile } from '../models/profile/types';

import Jumbotron from "../components/Jumbotron/Jumbotron";
import Works from '../components/Works/Works';
import About from '../components/About/About';
import Footer from '../components/layout/Footer';

interface IProjectProps {
  projectsData: IProject[];
  profileData: IProfile[];
}


const Home = ({ projectsData, profileData }: IProjectProps) => {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [profile, setProfile] = useState<IProfile[]>(profileData);

  return (
    <Fragment>
        <Jumbotron />
        <Works data={projects} />
        <About data={profile} />
        <div className="preloader"></div>
        <Footer />
    </Fragment>
  )
}




export const getStaticProps: GetStaticProps = async (context) => {
  const profileData = await getProfile();
  if (!profileData) {
    return {
      notFound: true,
    }
  }

  const projectsData = await getAllProjects();
  if (!projectsData) {
    return {
      notFound: true,
    }
  }
  return {
    props: { 
      projectsData: projectsData.data,
      profileData: profileData.data }, 
    revalidate: 5000  //604800 una semana
  };
};
export default Home;
