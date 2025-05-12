'use client';

import { Tips, FileEditingOne, TipsOne } from "@icon-park/react";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 px-8 py-10 border-t border-gray-600 w-full justify-center items-start sm:items-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tips theme="outline" size="22" fill="#d8dee9" />
        How it work
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FileEditingOne theme="outline" size="22" fill="#d8dee9"/>
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TipsOne theme="outline" size="22" fill="#d8dee9"/>
        About this program
      </a>
    </div>
  )
}