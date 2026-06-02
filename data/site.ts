import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Globe,
  GraduationCap,
  MonitorSmartphone,
  Sparkles,
  Waypoints,
  Wrench
} from "lucide-react";

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why AccioTech", href: "#why-acciotech" },
  { label: "Gallery / Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
] as const;

export const stats = [
  { value: "Egypt", label: "Launching first" },
  { value: "6+", label: "Future-ready learning tracks" },
  { value: "Regional", label: "Vision for future expansion" }
] as const;

export const programs = [
  {
    title: "Scratch & Creative Coding",
    description:
      "Playful coding journeys that teach logic, storytelling, and problem-solving through interactive projects.",
    icon: Sparkles,
    image: "/Programs Logos/scratch-transparent.png"
  },
  {
    title: "Python for Kids & Teens",
    description:
      "A confident path into real programming with age-appropriate challenges, apps, and automation ideas.",
    icon: Code2,
    image: "/Programs Logos/python-transparent.png"
  },
  {
    title: "Robotics Foundations",
    description:
      "Build, test, and refine robotics systems while learning mechanics, sensors, and teamwork.",
    icon: Bot,
    image: "/Programs Logos/robotics.jpg"
  },
  {
    title: "Arduino & Electronics",
    description:
      "Hands-on electronics labs that connect coding with circuits, sensors, and smart-device prototypes.",
    icon: Cpu,
    image: "/Programs Logos/arduino.jpg"
  },
  {
    title: "Web Development",
    description:
      "Design and launch modern websites while discovering how great digital products are structured and built.",
    icon: Globe,
    image: "/Programs Logos/web.jpg"
  },
  {
    title: "AI Basics for Young Innovators",
    description:
      "Explore machine learning concepts, ethical AI thinking, and beginner-friendly intelligent projects.",
    icon: BrainCircuit,
    image: "/Programs Logos/AI.jpg"
  }
] as const;

export const reasons = [
  {
    title: "Hands-on learning",
    description: "Students learn by making, testing, and improving real projects from day one.",
    icon: Wrench
  },
  {
    title: "Kid-friendly instructors",
    description: "Supportive mentors balance technical depth with clear, age-appropriate guidance.",
    icon: GraduationCap
  },
  {
    title: "Project-based curriculum",
    description: "Every pathway is designed around outcomes students can proudly present and explain.",
    icon: BadgeCheck
  },
  {
    title: "Robotics and coding together",
    description: "Software, electronics, and robotics connect naturally to build stronger understanding.",
    icon: MonitorSmartphone
  },
  {
    title: "Future-ready skills",
    description: "Learners grow in creativity, logic, confidence, collaboration, and digital fluency.",
    icon: Waypoints
  },
  {
    title: "Safe and motivating environment",
    description: "A trusted learning space that feels inspiring for students and reassuring for families.",
    icon: Sparkles
  }
] as const;

export const journeySteps = [
  {
    title: "Imagine",
    description: "We start with curiosity, creativity, and big questions worth exploring."
  },
  {
    title: "Learn",
    description: "Students gain guided foundations in coding, robotics, STEM, and design thinking."
  },
  {
    title: "Build",
    description: "Every learner turns ideas into working projects through hands-on experimentation."
  },
  {
    title: "Innovate",
    description: "Confidence grows as students refine solutions and present what they have created."
  }
] as const;

export const projects = [
  {
    title: "Robot car project",
    image: "/robot_car.jpg"
  },
  {
    title: "Scratch game",
    image: "/scratch_game.jpg"
  },
  {
    title: "Arduino smart home",
    image: "/arduino_smart_home.jpg"
  },
  {
    title: "Website project",
    image: "/website_project.png"
  },
  {
    title: "AI mini project",
    image: "/AI_mini_project.jpeg"
  }
] as const;

export const testimonials = [
  {
    quote:
      "My son became genuinely excited about technology after his first AccioTech workshop. The learning felt structured, modern, and inspiring.",
    name: "Maha A.",
    role: "Parent"
  },
  {
    quote:
      "I loved building projects instead of only watching lessons. The robotics sessions made coding feel real and fun.",
    name: "Faisal K.",
    role: "Student"
  },
  {
    quote:
      "AccioTech feels premium and thoughtful. It gives families confidence that students are learning future skills in a safe environment.",
    name: "Noor S.",
    role: "Parent"
  }
] as const;
