import React from 'react';
import MainLayoutHeader from '../../layouts/Header/Header';
import MainLayoutFooter from '../../layouts/Footer/Footer';
import DomainSearch from '../../components/Home-c/DomainSearch';
import HomeCarousel from '../../components/Home-c/HomeCarousel';
import HomeBusinessIdeas from '../../components/Home-c/HomeBusinessIdeas';
import WebsiteBuild from '../../components/Home-c/WebsiteBuild';
import WebsiteBuilderH from '../../components/Home-c/WebsiteBuilder-H';
import WorkWithStratovia from '../../components/Home-c/WorkWithStratovia';
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
      <WorkWithStratovia />
      <MainLayoutFooter />
    </>
  );
}
export default Home;