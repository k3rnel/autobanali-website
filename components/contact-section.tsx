"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto my-20">
        {/* Contact Information Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Address */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 bg-accent/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Հասցե</h3>
              <p className="text-muted-foreground">
                Հակոբ Հակոբյան 2
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 bg-accent/10 rounded-full mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Էլ․ հասցե</h3>
              <div className="text-muted-foreground space-y-1">
                <p><a href="mailto:autobanaliad@gmail.com">autobanaliad@gmail.com</a></p>
              </div>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 bg-accent/10 rounded-full mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Հեռախոսահամար</h3>
              <div className="text-muted-foreground space-y-1">
                <p><a href="tel:+37499750505">099750505</a></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
