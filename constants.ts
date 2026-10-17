/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project, JournalArticle } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Numerical Methods Suite',
    tagline: 'Newton-Raphson, Euler’s & Simpson’s Rule',
    description: 'A comprehensive Python & MATLAB library for solving complex mathematical problems via numerical approximation.',
    longDescription: 'Implemented core numerical algorithms including Newton-Raphson for root finding, Euler’s method for differential equations, and Simpson’s rule for numerical integration. This project focuses on the comparative accuracy of Python (NumPy) versus MATLAB in handling floating-point arithmetic and iterative convergence.',
    year: 2024,
    category: 'Scientific Computing',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Python (NumPy, SciPy)', 'MATLAB', 'Algorithmic Optimization', 'Error Analysis'],
    repoUrl: 'https://github.com/syed-ahmed4?tab=repositories'
  },
  {
    id: 'p2',
    name: 'Engineering Convergence Analysis',
    tagline: 'Visualizing computational error.',
    description: 'Data visualization study focused on algorithmic convergence rates and error propagation in scientific computing.',
    longDescription: 'Developed a visualization pipeline to study how different numerical methods converge towards true solutions. Created detailed error analysis plots to visualize the trade-off between computational cost (iterations) and precision, specifically applied to non-linear engineering equations.',
    year: 2024,
    category: 'Scientific Computing',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Matplotlib', 'Data Visualization', 'Statistical Analysis', 'Python']
  },
  {
    id: 'p3',
    name: 'Beam Deflection Simulator',
    tagline: 'Computational Structural Analysis',
    description: 'Simulating mechanical stress and beam deflection using computational techniques.',
    longDescription: 'An engineering tool designed to calculate and visualize the deflection of beams under various load conditions. This project translates physical mechanical formulas into computational code to predict structural behavior, aiding in the preliminary design phase of engineering structures.',
    year: 2025,
    category: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Structural Mechanics', 'Python Modeling', 'Physics Simulation', 'Computational Geometry']
  },
  {
    id: 'p4',
    name: 'Heat Transfer Model',
    tagline: 'Thermodynamics Simulation',
    description: 'Numerical modeling of heat distribution across materials using finite difference methods.',
    longDescription: 'Explored computational physics by creating a model for 2D heat transfer. The application solves partial differential equations to simulate how heat propagates through different mediums over time, visualizing the thermal gradient.',
    year: 2025,
    category: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Thermodynamics', 'PDE Solving', 'MATLAB', 'Python']
  },
  {
    id: 'p5',
    name: 'DSA Library Implementation',
    tagline: 'Core Computer Science Fundamentals',
    description: 'Custom implementation of essential Data Structures and Algorithms in C and Java.',
    longDescription: 'A repository of clean, optimized implementations of fundamental data structures (Linked Lists, Trees, Graphs) and algorithms (Sorting, Searching, Pathfinding). This project serves as a reference for time-complexity optimization and memory management analysis.',
    year: 2024,
    category: 'Algorithms',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Java', 'C Programming', 'Time Complexity Analysis', 'Memory Management']
  },
  {
    id: 'p6',
    name: 'Automation & Scripts',
    tagline: 'Workflow Efficiency Tools',
    description: 'A collection of utility scripts and automations using Python and Shell.',
    longDescription: 'Leveraging Python and basic Shell scripting to automate repetitive tasks, manage files, and process text data. Demonstrates practical application of programming skills to solve real-world "boring" problems efficiently.',
    year: 2024,
    category: 'Tools',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1000&fm=webp',
    technologies: ['Python Scripting', 'Automation', 'OS Interaction', 'File Processing']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "Why I Chose Scientific Computing",
        date: "Current Focus",
        excerpt: "Bridging the gap between raw mathematics and software engineering.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000&fm=webp",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]" },
                "Software engineering is often associated with web apps and databases. However, my passion lies deeper—in the mathematical engines that power simulations, predictions, and analysis."
            ),
            React.createElement("p", { className: "mb-8 text-[#5D5A53]" },
                "During my second year at Deccan College of Engineering, I discovered that coding isn't just about building interfaces; it's about solving equations that describe the physical world. Using Python and MATLAB, I've been exploring how to make computers 'think' in calculus."
            ),
            React.createElement("blockquote", { className: "border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif" },
                "\"The intersection of Physics, Math, and Code is where the magic happens.\""
            )
        )
    },
    {
        id: 2,
        title: "My Tech Stack Strategy",
        date: "Core Skills",
        excerpt: "Why I'm focusing on Python, C, and Java simultaneously.",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1000&fm=webp",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-[#5D5A53]" },
                "A strong engineer needs to understand both the high-level abstractions and the low-level memory management. That is why I balance my learning:"
            ),
            React.createElement("ul", { className: "list-disc pl-5 mb-8 text-[#5D5A53] space-y-2" },
                React.createElement("li", null, React.createElement("strong", null, "Python:"), " For rapid prototyping, scientific libraries (NumPy, SciPy), and AI integration."),
                React.createElement("li", null, React.createElement("strong", null, "C:"), " To understand pointers, memory allocation, and how the machine actually works."),
                React.createElement("li", null, React.createElement("strong", null, "Java:"), " For rigorous Object-Oriented Programming (OOP) and enterprise-scale architecture.")
            )
        )
    }
];

export const BRAND_NAME = 'Syed Ahmed';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/syedahmed-/';
export const GITHUB_PLACEHOLDER_URL = 'https://github.com/syed-ahmed4';
export const CONTACT_EMAIL = 'syedahmedsda@gmail.com';
export const PHONE_NUMBER = '+91 9705363962';
export const LOCATION = 'Hyderabad, India';
export const WEB3FORMS_ACCESS_KEY = 'f5ad4a82-2d8b-49f5-82d9-9e16991a9562';
