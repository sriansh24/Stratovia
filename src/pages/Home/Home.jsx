import React, { Suspense } from "react";
import MainLayoutHeader from "../../layouts/Header/Header";
import MainLayoutFooter from "../../layouts/Footer/Footer";
import DomainSearch from "../../components/Home-c/DomainSearch";
import LazySection from "../../components/Common/LazySection";
const HomeCarousel = React.lazy(
  () => import("../../components/Home-c/HomeCarousel"),
);
const HomeBusinessIdeas = React.lazy(
  () => import("../../components/Home-c/HomeBusinessIdeas"),
);
const WebsiteBuild = React.lazy(
  () => import("../../components/Home-c/WebsiteBuild"),
);
const WebsiteBuilderH = React.lazy(
  () => import("../../components/Home-c/WebsiteBuilder-H"),
);
const StratoviaAiro = React.lazy(
  () => import("../../components/Home-c/StratoviaAiro"),
);
const WorkWithStratovia = React.lazy(
  () => import("../../components/Home-c/WorkWithStratovia"),
);
const StratoviaQnsAns = React.lazy(
  () => import("../../components/Home-c/StratoviaQnsAns"),
);

function Home() {
  return (
    <>
      <MainLayoutHeader />
      <DomainSearch />
      <LazySection>
        <Suspense fallback={null}>
          <HomeCarousel />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <HomeBusinessIdeas />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <WebsiteBuild />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <WebsiteBuilderH />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <StratoviaAiro />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <WorkWithStratovia />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <StratoviaQnsAns />
        </Suspense>
      </LazySection>
      
      <LazySection>
        <Suspense fallback={null}>
          <MainLayoutFooter />
        </Suspense>
      </LazySection>
    </>
  );
}
export default Home;