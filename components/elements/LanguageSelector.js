"use client";
import { useState, useEffect, useRef } from "react";
import i18n from "../../i18next";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Initialize without localStorage
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "En", name: "En", flag: "/assets/img/header/gb.png" },
    { code: "Ru", name: "Ру", flag: "/assets/img/header/ru.png" },
    { code: "Uz", name: "O‘z", flag: "/assets/img/header/uz.png" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access localStorage only on the client side
      const savedLang = localStorage.getItem("lang") || i18n.language;
      setSelectedLanguage(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const chooseLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setSelectedLanguage(langCode);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", langCode);
    }
    setIsOpen(false);
  };

  return (
    <div className="lang-selector" ref={dropdownRef}>
      <div className="selected-lang" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={languages.find((lang) => lang.code === selectedLanguage)?.flag}
          alt={languages.find((lang) => lang.code === selectedLanguage)?.name}
          width={30}
          height={22}
          className="flag-icon"
        />{" "}
        {languages.find((lang) => lang.code === selectedLanguage)?.name}
      </div>

      {isOpen && (
        <ul className="lang-dropdown">
          {languages.map((language) => (
            <li key={language.code} onClick={() => chooseLanguage(language.code)}>
              <Image
                src={language.flag}
                alt={language.name}
                width={25}
                height={20}
                className="flag-icon"
              />
              <span className="lang-name">{language.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
