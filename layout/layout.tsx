import styles from "../src/styles/Layout.module.css";

type ChildrenProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className=" h-screen bg-blue-400 w-full">
      <div className="text-center py-7 ">{children}</div>
    </div>
  );
}
