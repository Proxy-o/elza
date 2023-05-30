import React from "react";
import { GiFactory } from "react-icons/gi";

export default function Card({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl m-6">
        <figure className="px-10 pt-10">{icon}</figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">plus d&aposinfos</button>
          </div>
        </div>
      </div>
    </>
  );
}
