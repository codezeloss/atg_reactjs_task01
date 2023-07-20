import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import NavigationTabs from "../components/NavigationTabs.tsx";
import React from "react";
import PostText from "../components/PostText.tsx";
import PostLink from "../components/PostLink.tsx";
import PostJob from "../components/PostJob.tsx";
import UserLocation from "../components/UserLocation.tsx";
import postImg01 from "../assets/post_image01.svg";
import avatar01 from "../assets/avatar01.svg";
import postImg02 from "../assets/post_image02.svg";
import postImg03 from "../assets/post_image03.svg";

interface TextProps {
  image: string;
  logo: string;
  type: string;
  title: string;
  description: string;
  avatar: string;
  user: string;
}

interface LinkProps {
  image: string;
  logo: string;
  type: string;
  title: string;
  date: string;
  location: string;
  avatar: string;
  user: string;
}

const postsTextData: any = [
  {
    image: postImg01,
    logo: "✍️",
    type: "Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    avatar: avatar01,
    user: "Sarthak Kamra",
  },
  {
    image: postImg02,
    logo: "🔬️",
    type: "Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    avatar: avatar01,
    user: "Sarah West",
  },
];
const postsLinkData: any = [
  {
    image: postImg03,
    logo: "🗓️",
    type: "Meetup",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    avatar: avatar01,
    user: "Ronal Jones",
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="max-w-[1040px] mx-auto">
        <NavigationTabs />

        <div className="flex gap-14">
          <div className="w-full flex flex-col gap-4 mb-24">
            {/* ** map() posts that contains text description */}
            {postsTextData &&
              postsTextData.map(
                (post: TextProps, index: React.Key | null | undefined) => (
                  <div key={index}>
                    <PostText
                      image={post?.image}
                      logo={post?.logo}
                      type={post?.type}
                      title={post?.title}
                      description={post?.description}
                      avatar={post?.avatar}
                      user={post?.user}
                    />
                  </div>
                )
              )}

            {/* ** map() posts that contains a link to the website */}
            {postsLinkData &&
              postsLinkData.map(
                (post: LinkProps, index: React.Key | null | undefined) => (
                  <div key={index}>
                    <PostLink
                      image={post?.image}
                      logo={post?.logo}
                      type={post?.type}
                      title={post?.title}
                      date={post?.date}
                      location={post?.location}
                      avatar={post?.avatar}
                      user={post?.user}
                    />
                  </div>
                )
              )}

            {/* ** map() posts that contains a link to Timesjobs */}
            <PostJob />
          </div>

          <UserLocation />
        </div>
      </div>
    </div>
  );
}

export default Home;
