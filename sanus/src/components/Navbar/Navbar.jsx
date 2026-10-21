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
  { label: "Home", href: "#", icon: <Home size={16} /> },
  { label: "Check-up", href: "#", icon: <ClipboardCheck size={16} /> },
  { label: "Projects", href: "#", icon: <FolderOpen size={16} /> },
  { label: "Pricing", href: "#", icon: <PoundSterling size={16} /> },
  { label: "About", href: "#", icon: <User size={16} /> },
  { label: "Contact", href: "#", icon: <Mail size={16} /> },
  { label: "Reviews", href: "#", icon: <Star size={16} /> },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <span className="site-brand">SANUS</span>
      <GooeyNav items={navItems} color="#55e9b8" size="md" />
    </header>
  );
}
