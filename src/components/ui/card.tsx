import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Card({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`border border-[#A67C52] bg-white ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function CardContent({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}
