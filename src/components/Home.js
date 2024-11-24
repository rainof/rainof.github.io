import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import FrontendMentor from "../images/frontendmentor.svg";
import Hero from "../images/fon_img_v2.png";

const useTypingEffect = (
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1000
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;

    const currentPhrase = phrases[currentPhraseIndex];

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setDisplayText(currentPhrase.slice(0, displayText.length + 1));
      }, pauseDuration);
    } else if (isTyping) {
      if (displayText !== currentPhrase) {
        if (
          currentPhrase === "I am ... who I am" &&
          displayText === "I am ..."
        ) {
          setIsPaused(true);
        } else {
          timer = setTimeout(() => {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          }, typingSpeed);
        }
      } else {
        timer = setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      if (displayText !== "") {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isTyping,
    isPaused,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return displayText;
};

function Home() {
  const phrases = [
    "I am a frontend developer",
    "I am a robotics researcher",
    "I am a lifelong learner",
    "I am ... who I am",
  ];
  const animatedText = useTypingEffect(phrases);
  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-20 flex items-center justify-center min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-6rem)]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-48 lg:gap-48 xl:gap-60 max-w-3xl w-full">
          {/* Hero Section */}
          <div className="text-center md:text-left md:w-[45%]">
            <p className="text-xl md:text-2xl xl:text-3xl text-orange-500">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mt-8 mb-4">
              Pattaraporn
              <br />
              Tulathum
            </h1>
            <p className="text-xl md:text-2xl xl:text=3xl text-zinc-600 sm:text-zinc-400 mt-8">
              {animatedText}
              <span className="animate-blink inline-block w-[0.1em] h-[0.8em] ml-1 bg-orange-400"></span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 sm:gap-5 mt-8">
              <a
                href="mailto:pattaraporn.tulathum@gmail.com"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://github.com/rainof"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pattaraporn-tulathum/"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.frontendmentor.io/profile/rainof"
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              >
                <img
                  src={FrontendMentor}
                  alt="Fronend Mentor"
                  className="h-5 w-5 filter invert drop-shadow-lg"
                />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-[40%] flex justify-center md:justify-end">
            <div className="h-auto w-52 md:w-60 xl:w-80">
              <img
                src={Hero}
                alt="Hero image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
