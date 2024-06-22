"use client";
import React, { useEffect } from 'react';

const ExternalRedirectPage = () => {
  useEffect(() => {
    window.location.href = 'https://edopalomino.notion.site/ChatGPT-para-Periodistas-6e9568982c6d4f11b04136fddb4c030f?pvs=74';
  }, []);

  return (
    <div>
      <p>Redirigiendo...</p>
    </div>
  );
};

export default ExternalRedirectPage;