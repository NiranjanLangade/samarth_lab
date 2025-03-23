import { Button } from "@/components/ui/button";
import FeatureSection from "@/components/FeatureSection";
import AnimatedStats from "@/components/AnimatedStats";
import WhoWeAre from "@/components/WhoWeAre";
import MeetDoctor from "@/components/MeetDoctor";
import TabsSection from "@/components/TabsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import BookAppointment from "@/components/BookAppointment";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">


      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-blue-100">
        <h1 className="text-5xl font-bold">Seamless Doctor Appointments</h1>
        <p className="text-lg mt-4 text-gray-700">Book your doctor’s appointment with ease and convenience.</p>
        <Button className="mt-6">Book Appointment</Button>
      </section>

      {/* Meet Doctor */}
      <MeetDoctor/>

      {/* Tabs Section */}
      <TabsSection/>

      {/* Features Section */}
      <FeatureSection/>

      {/* Animated Stats */}
      <AnimatedStats/>

      {/* Who We are */}
      <WhoWeAre/>


      {/* Testimonials Section */}
      <TestimonialSlider/>

      {/* Book Appointment */}
      <BookAppointment/>


    </div>
  );
}
