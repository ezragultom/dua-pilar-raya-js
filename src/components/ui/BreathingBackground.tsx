"use client";

export function BreathingBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Animated gradient orbs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl animate-breath-slow" />
            <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-purple-500/25 rounded-full blur-3xl animate-breath-medium" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl animate-breath-fast" />

            {/* Subtle gradient overlay to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
        </div>
    );
}
