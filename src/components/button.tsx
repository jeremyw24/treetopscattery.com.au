import ArrowSec from "../icons/arrow-sec.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  type?: "submit" | "button";
  href?: string; // Add href to the props
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", text = "Default Text", type = "button", href } = props;

  const defaultStyles =
    "rounded-[18px] flex capitalize items-center justify-center gap-[9px] w-fit text-white text-base lg:text-lg font-semibold font-['Jost'] leading-snug tracking-tight px-10 py-5 md:px-[54px] md:py-[26px]";
  const bgClass = variant === "primary" ? "bg-primary-200" : "bg-primary-100";
  const className = `${defaultStyles} ${bgClass}`;

  // If href is provided, render as an anchor tag; otherwise, render as a button
  if (href) {
    return (
      <a href={href} className={className}>
        {text}
        {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
      </a>
    );
  }

  return (
    <button className={className} type={type}>
      {text}
      {variant === "primary" ? <ArrowSec /> : <ArrowPri />}
    </button>
  );
};

export default Button;
