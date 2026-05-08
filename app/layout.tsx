import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment Similarity Detector – Catch Plagiarism Instantly",
  description: "Compare student submissions to identify potential collaboration or copying with detailed similarity reports. Built for teachers and professors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="222b834c-a5da-4c56-bfe6-7c211e93bdaa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
