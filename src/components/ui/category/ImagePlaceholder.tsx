import React from "react";

interface ImagePlaceholderProps {
  label: string;
  theme?: "dark" | "light";
  className?: string;
}

// Bordered placeholder shown where a real photo will go later. Just a border +
// "SLIKA" label, nothing more.
const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  theme = "dark",
  className = "",
}) => {
  const tone =
    theme === "dark"
      ? "border-white/15 text-white/30"
      : "border-black/15 text-black/30";

  return (
    <div
      className={`flex items-center justify-center border ${tone} ${className}`}
    >
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.35em]">
        {label}
      </span>
    </div>
  );
};

export default ImagePlaceholder;
