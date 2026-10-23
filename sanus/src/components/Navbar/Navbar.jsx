import GooeyNav from "./GooeyNavbar";
import {
  Home,
  ClipboardCheck,
  FolderOpen,
  PoundSterling,
  User,
  Mail,
  Star,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: <Home size={16} /> },
  { label: "Check-up", href: "/checkup", icon: <ClipboardCheck size={16} /> },
  { label: "Projects", href: "/projects", icon: <FolderOpen size={16} /> },
  { label: "Pricing", href: "/pricing", icon: <PoundSterling size={16} /> },
  { label: "About", href: "/about", icon: <User size={16} /> },
  { label: "Contact", href: "/contact", icon: <Mail size={16} /> },
  { label: "Reviews", href: "/reviews", icon: <Star size={16} /> },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <span className="site-brand">SANUS</span>
      <GooeyNav items={navItems} color="#55e9b8" size="md" />
    </header>
  );
}
