import React from "react";

interface ButtonProps {
  content: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  content,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "right",
  fullWidth = false,
}) => {
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center font-satoshi font-medium transition-all duration-300 ease-in-out rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6] disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant classes
  const variantClasses = {
    primary:
      "bg-[#3B82F6] text-white border border-[#3B82F6] hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-[#3B82F6]/30",
    secondary:
      "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 hover:border-gray-400",
    outline:
      "bg-transparent text-[#3B82F6] border border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white hover:shadow-lg hover:shadow-[#3B82F6]/20",
  };

  // Size classes
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  // Width class
  const widthClass = fullWidth ? "w-full" : "";

  // Icon size based on button size
  const iconSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
        group
      `}
    >
      {icon && iconPosition === "left" && (
        <span
          className={`mr-2 ${iconSize[size]} transition-transform group-hover:-translate-x-1`}
        >
          {icon}
        </span>
      )}

      <span className="uppercase tracking-wider font-bold">{content}</span>

      {icon && iconPosition === "right" && (
        <span
          className={`ml-2 ${iconSize[size]} transition-transform group-hover:translate-x-1`}
        >
          {icon}
        </span>
      )}

      {/* Animated underline effect for outline variant */}
      {variant === "outline" && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent group-hover:w-3/4 transition-all duration-500"></span>
      )}
    </button>
  );
};

export default Button;
