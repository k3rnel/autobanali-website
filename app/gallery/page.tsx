"use client"

import * as React from "react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { Header } from "@/components/header"
import {ContactSection} from "@/components/contact-section";

const images = [
    {
        src: "/images/gallery/bmw.jpg",
        alt: "BMW: պատրաստված և ծրագրավորված բանալի",
    },
    {
        src: "/images/gallery/mercedes-e.jpg",
        alt: "Mercedes-Benz E63: բանալիների կրկնօրինակում",
    },
    {
        src: "/images/gallery/maseratti.jpg",
        alt: "Maserati: պատրաստված և ծրագրավորված բանալի",
    },
    {
        src: "/images/gallery/cadillac.jpg",
        alt: "Cadillac: պատրաստված և ծրագրավորված բանալի",
    },
    {
        src: "/images/gallery/mustang.jpg",
        alt: "Ford Mustang: պատրաստված և ծրագրավորված բանալի",
    },
    {
        src: "/images/gallery/lex.jpg",
        alt: "Lexus: բանալիների կրկնօրինակում",
    },
    {
        src: "/images/gallery/corolla.jpg",
        alt: "Toyota Corolla: պատրաստված և ծրագրավորված բանալի",
    },
    {
        src: "/images/gallery/bz3x.jpg",
        alt: "Toyota bZ3X: բանալիների ծրագրավորում",
    },
    {
        src: "/images/gallery/ez61.jpg",
        alt: "Ավտոմեքենայի բանալիի ծրագրավորում",
    },
    {
        src: "/images/gallery/ez62.jpg",
        alt: "Ավտոմեքենայի բանալիի ծրագրավորում",
    },
    {
        src: "/images/gallery/pathfiner-2002.jpg",
        alt: "Nissan Pathfinder (2002): բանալիի վերականգնում",
    },
]

export default function GalleryPage() {
    const [open, setOpen] = React.useState(false)
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const currentImage = images[currentIndex]

    const openImage = (index: number) => {
        setCurrentIndex(index)
        setOpen(true)
    }

    const showPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    return (
        <main className="min-h-screen">
            <Header />

            <section className="mx-auto max-w-6xl px-4 py-12">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Տեսադարան
                    </h1>
                    <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                        Մեր ավտովերսալի ծառայությունների մի փոքր ուղեցույց՝ արտակարգ արգելափակումներ, բանալիների ծրագրավորում, կոնտակտային կողպեքների վերանորոգում և ավելին
                    </p>
                </header>

                {/* Thumbnails grid */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {images.map((image, index) => (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => openImage(index)}
                            className="group relative overflow-hidden rounded-xl border bg-background/50 outline-none ring-0 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-left">
                                <p className="line-clamp-2 text-xs text-white">
                                    {image.alt}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* Lightbox / modal */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
                    <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
                        <div className="relative flex max-h-full w-full max-w-5xl flex-col gap-4 rounded-2xl bg-background p-4 shadow-2xl ring-1 ring-border md:p-6">
                            {/* Close */}
                            <Dialog.Close
                                className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white outline-none ring-0 transition hover:bg-black focus-visible:ring-2 focus-visible:ring-primary"
                                aria-label="Close"
                            >
                                ✕ Փակել
                            </Dialog.Close>

                            {/* Main content */}
                            <div className="relative flex items-center justify-center gap-3 md:gap-4">
                                {/* Prev (desktop) */}
                                <button
                                    type="button"
                                    onClick={showPrev}
                                    className="hidden shrink-0 rounded-full bg-black/50 px-3 py-2 text-sm text-white outline-none ring-0 transition hover:bg-black focus-visible:ring-2 focus-visible:ring-primary md:inline-flex"
                                    aria-label="Previous image"
                                >
                                    ‹
                                </button>

                                {/* Image */}
                                <div className="relative min-w-0 flex-1">
                                    <div className="relative h-[65vh] overflow-hidden rounded-xl">
                                        <Image
                                            src={currentImage.src}
                                            alt={currentImage.alt}
                                            fill
                                            priority
                                            className="object-contain"
                                            sizes="(min-width: 1024px) 1024px, 100vw"
                                        />
                                    </div>
                                </div>

                                {/* Next (desktop) */}
                                <button
                                    type="button"
                                    onClick={showNext}
                                    className="hidden shrink-0 rounded-full bg-black/50 px-3 py-2 text-sm text-white outline-none ring-0 transition hover:bg-black focus-visible:ring-2 focus-visible:ring-primary md:inline-flex"
                                    aria-label="Next image"
                                >
                                    ›
                                </button>
                            </div>

                            {/* Caption + counter + mobile nav */}
                            <div className="flex flex-col gap-3 border-t pt-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
                                <div className="md:max-w-xl">
                                    <p className="line-clamp-2">{currentImage.alt}</p>
                                </div>

                                <div className="flex items-center justify-between gap-3 md:justify-end">
                                    {/* Mobile prev/next */}
                                    <div className="flex items-center gap-2 md:hidden">
                                        <button
                                            type="button"
                                            onClick={showPrev}
                                            className="rounded-full bg-black/60 px-3 py-1 text-xs text-white outline-none ring-0 transition hover:bg-black focus-visible:ring-2 focus-visible:ring-primary"
                                        >
                                            Նախորդ
                                        </button>
                                        <button
                                            type="button"
                                            onClick={showNext}
                                            className="rounded-full bg-black/60 px-3 py-1 text-xs text-white outline-none ring-0 transition hover:bg-black focus-visible:ring-2 focus-visible:ring-primary"
                                        >
                                            Հաջորդ
                                        </button>
                                    </div>

                                    <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium">
                    {currentIndex + 1} / {images.length}
                  </span>
                                </div>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            <ContactSection />
        </main>
    )
}
