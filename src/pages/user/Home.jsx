import React from "react";
import PageWrapper from "../../components/PageWrapper";
import HeroSection from "../../components/homepage/HeroSection";
import TechSection from "../../components/homepage/TechSection";
import ProjectSection from "../../components/homepage/ProjectSection";
import ExperienceSection from "../../components/homepage/ExperienceSection";
import WhyHireMeSection from "../../components/homepage/WhyHireMeSection";
import TestimonialSection from "../../components/homepage/TestimonialSection";
import CTASection from "../../components/homepage/CTASection";

const Home = () => {
  return (
    <PageWrapper>
      <HeroSection />
      <TechSection />
      <ProjectSection />
      <ExperienceSection />
      <WhyHireMeSection />
      <TestimonialSection />
      <CTASection />
    </PageWrapper>
  );
};

export default Home;
