import {
  FileText,
  Github,
  Globe,
  Link as LinkIcon,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

export function SocialIcon({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const t = title.toLowerCase();
  if (t.includes("github")) return <Github className={className} />;
  if (t.includes("linkedin")) return <Linkedin className={className} />;
  if (t.includes("twitter") || t.includes("x ("))
    return <Twitter className={className} />;
  if (t.includes("resume")) return <FileText className={className} />;
  if (t.includes("web") || t.includes("site"))
    return <Globe className={className} />;
  if (t.includes("email") || t.includes("mail"))
    return <Mail className={className} />;
  if (t.includes("phone")) return <Phone className={className} />;
  return <LinkIcon className={className} />;
}
