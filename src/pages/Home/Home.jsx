import React from 'react';
import MainLayoutHeader from '../../layouts/Header/Header';
import MainLayoutFooter from '../../layouts/Footer/Footer';
import DomainSearch from '../../components/Home-c/DomainSearch';
import HomeCarousel from '../../components/Home-c/HomeCarousel';
import HomeBusinessIdeas from '../../components/Home-c/HomeBusinessIdeas';
import WebsiteBuild from '../../components/Home-c/WebsiteBuild';
import WebsiteBuilderH from '../../components/Home-c/WebsiteBuilder-H';
import StratoviaAiro from '../../components/Home-c/StratoviaAiro';
// import SaAiroExperiment from '../../components/Home-c/SaAiroExperiment';
import WorkWithStratovia from '../../components/Home-c/WorkWithStratovia';
// import WwsExperiment from '../../components/Home-c/WwsExperiment';
import StratoviaQnsAns from '../../components/Home-c/StratoviaQnsAns'
import '../../assets/css/HomeCss/Home-Styles.css';

function Home() {
  return (
    <>
      <MainLayoutHeader />
      <DomainSearch />
      <HomeCarousel />
      <HomeBusinessIdeas />
      <WebsiteBuild />
      <WebsiteBuilderH />
      <StratoviaAiro />
      {/* <SaAiroExperiment /> */}
      <WorkWithStratovia />
      {/* <WwsExperiment /> */}
      <StratoviaQnsAns />
      <MainLayoutFooter />
    </>
  );
}
export default Home;