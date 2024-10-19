import { useState, useEffect } from "react";

const TypingEffect = () => {
  const messages = [
    "Fullstack Web Developer",
    "Database Manager",
    "Videographer",
    "Photographer",
    "Video Editor",
  ];
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const current = messages[messageIndex];
      let updatedMessage = current.substring(0, charIndex);

      if (isDeleting) {
        setCurrentMessage(updatedMessage);
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      } else {
        setCurrentMessage(updatedMessage);
        if (charIndex < current.length) {
          setCharIndex(charIndex + 1);
          setTypingSpeed(50);
        } else {
          setIsDone(true);
          setTypingSpeed(100);
        }
      }
      if (isDone) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
        setIsDone(false);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, typingSpeed, messageIndex]);

  return (
    <span className="typing-container font-bold text-[#c5ffde]">{currentMessage}</span>
  );
};

export default TypingEffect;
