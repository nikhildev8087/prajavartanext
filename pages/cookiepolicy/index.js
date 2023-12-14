import { IMAGES } from "@/assets/images";
import Image from "next/image";
import React from "react";

const CookiePolicy = () => {
  return (
    <div className="h-full w-full relative">
      <div className="py-4 lg:h-24 md:h-24 sm:h-16 h-20">
        <div className="relative h-auto w-48 ">
          <Image className="ml-8 h-full  w-full" src={IMAGES?.logosm} />
        </div>
      </div>

      <hr />

      <div className="p-8">
        <h1 className="mb-2 text-2xl font-bold">Cookie Policy</h1>
        <p className="mb-2">
          This is the Cookie Policy for prajavarta, accessible from
          https://prajavarta.com
        </p>
        <h1 className="mb-2 text-lg font-bold">What Are Cookies</h1>
        <p className="mb-2">
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or 'break'
          certain elements of the sites functionality.
        </p>

        <h1 className="mb-2 text-lg font-bold">How We Use Cookies</h1>
        <p className="mb-2">
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <h1 className="mb-2 text-lg font-bold">Disabling Cookies</h1>
        <p>
          You can prevent the setting of cookies by adjusting the settings on
          your browser (see your browser Help for how to do this). Be aware that
          disabling cookies will affect the functionality of this and many other
          websites that you visit. Disabling cookies will usually result in also
          disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </p>

        <h1 className="mb-2 text-lg font-bold">The Cookies We Set</h1>

        <div>
          <ul className="ml-6 list-disc">
            <li className="mb-2">
              Account related cookies -
              <p className="mb-2">
                If you create an account with us then we will use cookies for
                the management of the signup process and general administration.
                These cookies will usually be deleted when you log out however
                in some cases they may remain afterwards to remember your site
                preferences when logged out.
              </p>
            </li>
            <li className="mb-2">
              Login related cookies -
              <p className="mb-2">
                We use cookies when you are logged in so that we can remember
                this fact. This prevents you from having to log in every single
                time you visit a new page. These cookies are typically removed
                or cleared when you log out to ensure that you can only access
                restricted features and areas when logged in.
              </p>
            </li>
            <li className="mb-2">
              Surveys related cookies -
              <p className="mb-2">
                From time to time we offer user surveys and questionnaires to
                provide you with interesting insights, helpful tools, or to
                understand our user base more accurately. These surveys may use
                cookies to remember who has already taken part in a survey or to
                provide you with accurate results after you change pages.
              </p>
            </li>
            <li className="mb-2">
              Site preferences cookies -
              <p className="mb-2">
                In order to provide you with a great experience on this site we
                provide the functionality to set your preferences for how this
                site runs when you use it. In order to remember your preferences
                we need to set cookies so that this information can be called
                whenever you interact with a page is affected by your
                preferences.
              </p>
            </li>
          </ul>
        </div>

        <h1 className="mb-2 text-lg font-bold">Third Party Cookies</h1>
        <p className="mb-2">
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>
        <div>
          <ul className="ml-6 list-disc">
            <li className="mb-2">
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
              <p className="mb-2">
                For more information on Google Analytics cookies, see the
                official Google Analytics page.
              </p>
            </li>
            <li className="mb-2">
              Third party analytics are used to track and measure usage of this
              site so that we can continue to produce engaging content. These
              cookies may track things such as how long you spend on the site or
              pages you visit which helps us to understand how we can improve
              the site for you.
            </li>
            <li className="mb-2">
              From time to time we test new features and make subtle changes to
              the way that the site is delivered. When we are still testing new
              features these cookies may be used to ensure that you receive a
              consistent experience whilst on the site whilst ensuring we
              understand which optimisations our users appreciate the most.
            </li>
            <li className="mb-2">
              The Google AdSense service we use to serve advertising uses a
              DoubleClick cookie to serve more relevant ads across the web and
              limit the number of times that a given ad is shown to you.
              <p className="mb-2">
                For more information on Google AdSense see the official Google
                AdSense privacy FAQ.
              </p>
            </li>
            <li className="mb-2">
              We use adverts to offset the costs of running this site and
              provide funding for further development. The behavioural
              advertising cookies used by this site are designed to ensure that
              we provide you with the most relevant adverts where possible by
              anonymously tracking your interests and presenting similar things
              that may be of interest.
            </li>
            <li className="mb-2">
              Several partners advertise on our behalf and affiliate tracking
              cookies simply allow us to see if our customers have come to the
              site through one of our partner sites so that we can credit them
              appropriately and where applicable allow our affiliate partners to
              provide any bonus that they may provide you for making a purchase.
            </li>
            <li className="mb-2">
              We also use social media buttons and/or plugins on this site that
              allow you to connect with your social network in various ways. For
              these to work the following social media sites including; `List
              the social networks whose features you have integrated with your
              site?:12,` will set cookies through our site which may be used to
              enhance your profile on their site or contribute to the data they
              hold for various purposes outlined in their respective privacy
              policies.
            </li>
          </ul>
        </div>
        <h1 className="mb-2 text-lg font-bold">More Information</h1>
        <p className="mb-2">
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren't sure whether you need
          or not it's usually safer to leave cookies enabled in case it does
          interact with one of the features you use on our site.
        </p>
        <p className="mb-2">
          However if you are still looking for more information then you can
          contact us through one of our preferred contact methods:
        </p>
        <ul className="list-disc ml-6">
          <li>Email: support@prajawarta.com</li>
        </ul>
      </div>
    </div>
  );
};

export default CookiePolicy;
