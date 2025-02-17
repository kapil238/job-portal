import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FaqSection from './FaqSection'
import BenefitsSection from './BenefitsSection'
import EmployerReviews from './EmployerReviews'
import ReviewForm from './ReviewForm'
// import { FaqSection } from './FaqSection'

const faqItems = [
  { title: "How does the job portal work?", children: "You can search and apply for jobs easily." },
  { title: "Is registration free?", children: "Yes, registering on our platform is completely free." },
  { title: "How can I contact support?", children: "You can reach us via email or live chat." },
  { title: "How do I create an employer account with the job portal?", children: "You can reach us via email or live chat." },
  { title: "Can I update my profile after registration?", children: "Yes, you can update your profile anytime through the dashboard." },
  { title: "What types of jobs are available on the portal?", children: "We offer a wide range of jobs including full-time, part-time, and remote positions." },
  { title: "Can I delete my account?", children: "Yes, you can delete your account by contacting support." },
  { title: "Do you offer internship opportunities?", children: "Yes, we list internships across various fields and industries." },
  { title: "How do I track my job applications?", children: "You can track your applications directly from your dashboard." },
];


const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <FaqSection items={faqItems} />
      <EmployerReviews/>
      <BenefitsSection/>
      <ReviewForm/>
      <Footer />
    </div>
  )
}

export default Home