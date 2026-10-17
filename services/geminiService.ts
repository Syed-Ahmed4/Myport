/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from '../constants';

const getSystemInstruction = () => {
  const projectContext = PROJECTS.map(p => 
    `- Project: ${p.name} (Tech: ${p.technologies.join(', ')}). Description: ${p.description}`
  ).join('\n');

  return `You are the AI Assistant for Syed Ahmed, a Computer Science student and Software Engineer.
  Your goal is to help recruiters and visitors understand Syed's skills, projects, and potential.
  
  Key Profile Details:
  - Role: CS Student at Deccan College of Engineering (2nd Year).
  - Strong foundation in: Python, C, Scientific Computing, Numerical Methods, Data Structures (DSA).
  - Soft Skills: Problem-solving, quick learner, team collaboration.
  - Seeking: Internship opportunities.
  
  Syed's Project Portfolio:
  ${projectContext}
  
  Tone: Professional, concise, intelligent, and humble.
  If asked about contact info, provide: syedahmedsda@gmail.com.
  If asked about something outside his resume, politely pivot back to his engineering skills.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    const apiKey = "AIzaSyDH_zNibob-QdhuwiOvydtQcDHPK0qD6aI";
    
    if (!apiKey) {
      return "I'm currently offline (API Key missing). Please email Syed directly at syedahmedsda@gmail.com.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble retrieving that information. Please check the resume section.";
  }
};