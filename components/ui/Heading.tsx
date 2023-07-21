import React from "react";
interface HeadingProps {
  title: string;
  description: string;
}
const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Heading;
