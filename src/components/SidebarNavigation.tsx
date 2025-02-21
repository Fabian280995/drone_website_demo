import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PropsWithChildren } from "react";

interface SidebarNavigationProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

function SidebarNavigation({
  open,
  onClose,
  className,
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
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2 }}
            className="absolute h-screen top-0 right-0 w-screen bg-white shadow-md flex flex-col items-center pt-24"
          >
            <button
              className="size-12 justify-center items-center flex"
              onClick={onClose}
            >
              <X className="text-gray-700" />
            </button>
            <div className={cn("p-4", className)}>{children}</div>
          </motion.nav>
        </div>
      )}
    </AnimatePresence>
  );
}

export default SidebarNavigation;
