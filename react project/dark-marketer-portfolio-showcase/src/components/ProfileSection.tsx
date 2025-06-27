
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const ProfileSection = () => {
  return (
    <section className="flex flex-col items-center mt-28 px-6 sm:px-12 animate-fade-in-up">
  <Avatar className="h-32 w-32 mb-6 shadow-neon">
    <AvatarImage src="/assets/whatsapp.jpg" alt="Profile picture" />
    <AvatarFallback>ME</AvatarFallback>
  </Avatar>
  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 text-center text-emerald-400">Yasir Munir</h1>
  <h1 className="text-4l sm:text-5xl font-extrabold tracking-tight mb-2 text-center">
   Meta Ads & E-Commerce Expert
  </h1>
  <p className="text-lg text-gray-400 max-w-xl text-center">
  Certified Digital Marketer <br />
  Social Media Promotions & Managing Services
  </p>
 
</section>

  );
};

export default ProfileSection;
