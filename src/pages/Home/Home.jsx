import React, { Suspense } from "react";
import MainLayoutHeader from "../../layouts/Header/Header";
import MainLayoutFooter from "../../layouts/Footer/Footer";
import DomainSearch from "../../components/Home-c/DomainSearch";
import { useInView } from "react-intersection-observer";
const HomeCarousel = React.lazy(() => import ("../../components/Home-c/HomeCarousel"));
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

function LazySection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense fallback={<div style={{ height: "300px" }} />}>
          {children}
        </Suspense>
      ) : (
        <div style={{ height: "300px" }} />
      )}
    </div>
  );
}

function Home() {
  return (
    <>
      <MainLayoutHeader />
      <DomainSearch />
      <LazySection>
        <HomeCarousel />
      </LazySection>
      <LazySection>
        <HomeBusinessIdeas />
      </LazySection>
      <LazySection>
        <WebsiteBuild />
      </LazySection>
      <LazySection>
        <WebsiteBuilderH />
      </LazySection>
      <LazySection>
        <StratoviaAiro />
      </LazySection>
      <LazySection>
        <WorkWithStratovia />
      </LazySection>
      <LazySection>
        <StratoviaQnsAns />
      </LazySection>
      <LazySection>
        <MainLayoutFooter />
      </LazySection>
    </>
  );
}
export default Home;