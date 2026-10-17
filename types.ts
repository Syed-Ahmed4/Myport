/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  year: number;
  category: 'Scientific Computing' | 'Algorithms' | 'Engineering' | 'Tools';
  imageUrl: string;
  gallery?: string[];
  technologies: string[];
  repoUrl?: string; // Optional real link
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode; 
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home'; scrollTarget?: string }
  | { type: 'project'; project: Project }
  | { type: 'journal'; article: JournalArticle }
  | { type: 'contact' };
