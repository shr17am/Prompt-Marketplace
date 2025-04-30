"use client";
import React from 'react';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { styles } from '@/utils/styles';
import { Button, Chip, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";


type Props = {};

const Page = (props: Props) => {
  const router = useRouter();  
  return (
    <div>
 <h4 className={`${styles.heading}font-Monserrat xl:text-6xl 2xl:text-7xl flex items-center justify-center`}>
              <span className="text-[#64ff4c]">About&nbsp;</span>Us
      </h4>
<Divider className="bg-[#ffffff14] mt-5" />
      <div className="col-span-1 w-full md:w-[95%] md:mt-5 px-5 md:px-[unset] ml-28">
      <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
      Our Mission
      </h5>
      <p className={`${styles.paragraph} pb-5 text-[21px]`}>
      At Prompts, we're passionate about inspiring creativity and empowering writers, artists, and creators of all kinds. Our mission is to provide a platform where you can find unique, thought-provoking prompts to spark your imagination and enhance your creative journey.      </p>
      <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
      What We Offer
      </h5>
      <p className={`${styles.paragraph} pb-5 text-[21px]`}>
      Diverse Prompt Categories: Explore a wide range of prompt categories, including writing, drawing, photography, storytelling, and more. We believe in catering to various creative interests and styles.
<br></br>
Quality and Originality: Our team curates and creates high-quality, original prompts designed to stimulate your creativity and challenge your skills.
<br></br>

Customizable Options: Tailor prompts to your preferences with customizable features such as word count, genre, theme, and difficulty level.
<br></br>

Community Engagement: Join a vibrant community of creators where you can share your work, collaborate with others, and participate in creative challenges and events.
      </p>
      <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
      Our Values
      </h5>
      <p className={`${styles.paragraph} pb-5 text-[21px]`}>
      Creativity: We celebrate creativity in all its forms and believe in the power of prompts to ignite inspiration and innovation.
      <br></br>

Diversity and Inclusion: We embrace diversity and strive to create a welcoming space for creators from all backgrounds and perspectives.
<br></br>

Quality: We are committed to providing high-quality prompts that challenge and inspire our community members.
<br></br>

Community: We believe in the strength of community and encourage collaboration, feedback, and support among creators.
      </p>
      <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
      Get in Touch
      </h5>
      <p className={`${styles.paragraph} pb-5 text-[21px]`}>
      We'd love to hear from you! Whether you have feedback, suggestions, or just want to say hello, feel free to reach out to us at prompts@prompts.com

Thank you for being part of the Prompts community. Happy creating!
      </p>
      <Button
        className={`${styles.button} bg-[#2551b0] font-[500] h-[45px] ml-[950px]`}
        onClick={() => router.push("/marketplace")}
      >
        Explore
      </Button>
    </div>
    <Divider className="bg-[#ffffff14] mt-5" />
    <Footer/>
  </div>
      
  );
};

export default Page;

