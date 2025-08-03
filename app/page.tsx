// import Image from "next/image";
// import Title from "../components/Title";
import Block from "../components/Block";
import BackgroundVideo from "../components/BackgroundVideo";
import Hero from "../components/Hero";
// import Coming from "../components/Coming";
import Highlights from "../components/Highlights";
import Plan from "../components/Plan";
import Icons from '../components/Icons'
export default function Home() {
  const items = [
    {
      url: "https://dge74qcdvkym8.cloudfront.net/assets/first_tile_image_updated.jpeg",
      content:
        "The Karlad Lake is a natural freshwater lake situated near the Banasura Sagar Dam. A couple of miles past Vythiri town",
      title: "Karlad Lake Resort In Wayanad",
    },
    {
      url: "https://dge74qcdvkym8.cloudfront.net/assets/brits_heritage_img_instagram.jpeg",
      content:
        "A vintage bungalow in the forest of Kerala-Tamilnadu border with a foggy weather in munnar since 1923",
      title: "Brits Heritage",
    },
    {
      url: "https://dge74qcdvkym8.cloudfront.net/assets/third-tile-img.png",
      content:
        "Discover Your Perfect Getaway: Explore a variety of resorts in our vacation packages!",
      title: "Coming soon",
    },
    {
      url: "https://dge74qcdvkym8.cloudfront.net/assets/placeholder-resort.jpg",
      content:
        "We keep our trademark of uniqueness by offering you customized services when it comes to food and room preferences, keeping them just the way you want.",
      title: "Coming soon",
    },
    // 'https://dge74qcdvkym8.cloudfront.net/assets/footer_phone_infront.png',
    // 'https://dge74qcdvkym8.cloudfront.net/assets/phone-image-with-preview.png',
    // 'https://dge74qcdvkym8.cloudfront.net/assets/footer_phone_behind.png',
  ];
  return (
    <>
      <div className=" moving relative w-[100vw] h-[100vh] overflow-hidden text-white ">
        <BackgroundVideo />
        <div className="hero aspect-[20/9] max-md:text-center max-md:flex max-md:flex-col max-md:gap-[1rem]  max-md:pt-[10em]   ">
          <Hero />
        </div>
      </div>
      {/* <Coming /> */}
      <Highlights />
      <div className="container max-md/body:w-full max-md:mx-auto  max-md:aspect-auto">
        {items.map((item, index) => (
          <Block
          key={index}
          backgroundImage={item.url}
          content={item.content}
          title={item.title}
          />
        ))}
      </div>
        <Plan />
        <Icons/>
    </>
  );
}
// if you're encountering issues, here are a few approaches to address it: