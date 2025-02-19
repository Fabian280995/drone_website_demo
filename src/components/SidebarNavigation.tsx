import React, { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface SidebarNavigationProps {
  open: boolean;
  onClose: () => void;
}

function SidebarNavigation({
  open,
  onClose,
  children,
}: PropsWithChildren<SidebarNavigationProps>) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed h-screen inset-0 shadow-md top-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40"
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.2 }}
            className="absolute h-screen top-0 right-0 w-64 bg-white shadow-md"
          >
            <Button onClick={onClose} variant={"ghost"} size={"icon"}>
              <X className="text-gray-700" />
            </Button>
            <div className="p-4">{children}</div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SidebarNavigation;
