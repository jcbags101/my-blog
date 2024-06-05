import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About HadiBlog
      </h1>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Welcome to HadiBlog, a space where creativity, knowledge,
          and inspiration come together. Our mission is to provide our
          readers with a diverse range of content that educates,
          informs, and inspires. Whether you're looking for the latest
          tech tips, personal growth stories, or creative insights,
          HadiBlog has something for everyone.
        </p>
        <p>
          At HadiBlog, we believe in the power of sharing knowledge
          and ideas. Our vision is to create a vibrant community where
          readers can explore new perspectives, stay updated with the
          latest trends, and find inspiration in every post. We aim to
          be a go-to resource for those who are passionate about
          learning and growing in various aspects of life.
        </p>
        <p>
          <h2 className="text-2xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-snug">
            What We Offer
          </h2>
          <ul className="list-inside list-disc">
            <li>
              <strong>Tech Tips and Trends:</strong> Stay ahead in the
              ever-evolving world of technology with our expert tips,
              reviews, and trend analyses.
            </li>
            <li>
              <strong>Personal Growth Stories:</strong> Discover
              inspiring stories and practical advice to help you on
              your journey of personal development.
            </li>
            <li>
              <strong>Creative Insights:</strong> Unleash your
              creativity with our articles on art, design, writing,
              and more.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-snug">
            Join Our Community
          </h2>
          <p>
            We invite you to join our growing community of readers who
            are passionate about learning and exploring new ideas.
            Engage with our content, share your thoughts, and connect
            with like-minded individuals. At HadiBlog, we value your
            feedback and contributions, and we're excited to have you
            on this journey with us.
          </p>
          <NewsletterSignup />
        </p>
      </div>
    </Container>
  );
}

function NewsletterSignup() {
  return (
    <div>
      <h3>Subscribe to our Newsletter</h3>
      <p>
        Stay updated with the latest posts from HadiBlog. Enter your
        email below:
      </p>
      <form className="mt-4">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-[#545454] px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none">
          Subscribe
        </button>
      </form>
    </div>
  );
}
