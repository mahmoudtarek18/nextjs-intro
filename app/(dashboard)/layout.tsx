import NewTodoForm from "@/components/NewTodoForm";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4">
      <h1>Dashboard</h1>
      <div className="mb-4">
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
