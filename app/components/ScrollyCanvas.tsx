"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const lastFrameIndex = useRef(0);

    // Total frames based on renamed sequence
    const frameCount = 120; // 0 to 119

    // Initialize scroll hook
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress for smoother animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map scroll progress to frame index
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

    // Render function
    const render = (index: number) => {
        if (!images.length || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const frameIdx = Math.min(
            Math.max(Math.round(index), 0),
            frameCount - 1
        );
        const img = images[frameIdx];
        if (!img) return;

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    };

    // Load images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                const filename = `/sequence/img_${i.toString().padStart(3, "0")}.webp`;
                img.src = filename;

                await new Promise<void>((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image: ${filename}`);
                        resolve();
                    };
                });
                loadedImages.push(img);
            }

            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // Render loop on scroll changes
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        lastFrameIndex.current = latest;
        requestAnimationFrame(() => render(latest));
    });

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                if (isLoaded && images.length > 0) {
                    render(lastFrameIndex.current);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images]);

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded && images.length > 0 && canvasRef.current) {
            render(0);
        }
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white bg-black z-50">
                        <div className="text-2xl font-light tracking-widest">LOADING {loadingProgress}%</div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />

                <Overlay scrollYProgress={smoothProgress} />
            </div>
        </div>
    );
}
