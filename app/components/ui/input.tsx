import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-base text-[#242424] focus:border-[#242424] focus:outline-none transition-colors ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-base text-[#242424] focus:border-[#242424] focus:outline-none transition-colors ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";
